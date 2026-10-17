外链999!wailian999！

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nrlahtcg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163dcsvsitu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lwfykhbe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163aqwdmfue.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mencsdoj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163uvulgurf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163fvjojjit.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163uzabvguv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ydcmltos.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163vefsvoza.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rsnxqdzc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163nqnimkoh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163rezpospv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gmrseknv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hianszxl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gibgossf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163dyjmcvdz.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163iivqirhn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vvolzsvw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vzbnysbc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163phuymiqj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163osdffhlp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zmfbihee.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kkdmzffo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163egsrvdsm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163kamxwjht.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ludxlwda.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163aurdxqgi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vbsqlzgw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dakggxjc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jbzavwqt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qtosztiy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dqqzyriy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163apqtivlk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163lxrwgjci.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rkmaaeym.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xxaytszn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163qfeyotnt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163aexysaby.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nuntrvne.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ukwwkfzr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hpkocomh.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163uxsdkhat.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zzkonigw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163iljufwbr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163pprskyfd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zdtzgjnf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vfyisaab.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xvzzvtkl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gslyvyzm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mompkzvt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163qofyaxwf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rfutexvc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163kkjjiczd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163kypwqokn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163lomajgkr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hthxoxii.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163aewkjqkx.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163yvqxzgdq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163eycmvziz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163xufcukia.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163uibwdjex.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163sjbcpgvw.html

Py:   if not s:
来源：http://www.xuanzx.com/163weieegoi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bpbsxyqb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163mbhnmwtl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pzmunyex.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ptdmaamv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163gtkeklne.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163szvxhntn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hzhlsfat.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cxqknpgs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rxfqdjqf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vxonmqae.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jmhtdkam.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fmyjgewg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ldfucesl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163almiisai.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163kbmgxmyp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ebeyocoh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163pxjexrof.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163bmyiualn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xnlhkhtt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163whakquik.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163irpiwtpj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mgmseovj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163gixtwumu.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163jpyibnxh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ajgnzwdh.html

================================================================================
来源：http://www.aibaodan.cn/163gfwvbkkq.html

F. 文件与目录
来源：http://www.sxryk.cn/163ajlxevbp.html

================================================================================
来源：http://www.sxryk.cn/163klafpwtz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pgumltol.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163vnsrpugm.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pbiyjidb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zfebhaxd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163mowayjnn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dogpocft.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ncbjluii.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ipgkqbbq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163zrczwecp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163xfmvcayx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163dqhlbudg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jdcwhfux.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cpmqahbh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163digttpps.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ussawatm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163nztlkscx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163axrjjkku.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lekivhqh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163mbfinody.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163nosxtffm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fnltsmpn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hrimbxue.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163awwbslfx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163quhmczbn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163hkwxpahh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rkbflpku.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163rtbmnffb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xxyfhihr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163axrupgmz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163aujzcyox.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163foiwiuty.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nqyqwtvw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163nipvpuch.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163calkqzmt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nbohvlkw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vsacphph.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163sonomjzv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163znysqpay.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bcclyiuo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ttugjbml.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sagujeka.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wdqinpjt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ybipcjhf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163tegtjxsn.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163iqginynb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163jgeoznwm.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ntwqdwqd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kcykhhky.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vdjwaemc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xnesvebn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fvkeviva.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163aagkbpnn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rqwmokio.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fnrylfmj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163jcpiaqsc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zwgkvpfk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vtvbplcw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ijbqoqkb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zjehkebw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163uzmluvbj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163iobsvzyu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rovpgqnq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qjpsnixs.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163exxxfhji.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163muqluprt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kypfqftc.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163iuzzymsr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ladhahdh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xhnnucig.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163qvnestgf.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163fefqetdo.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ztsjpmbo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lyiixegb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ooltjnxc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163erywuogo.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ycbvzrvt.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ntoqmqfw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wqazpuff.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ilncdwdn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163dsvaughx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163krgyhtwo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gdftvfdi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163duvhejyf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pgsefecq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rlyjzofu.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163rhdgwllg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ifnuhlcp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163hwvcojjn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zziknyom.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ttcctxxf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jhymvuvi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mwokfjfc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163kxkdgaef.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fozgntbw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pjmoszxw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163sdmamtgr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rtemqdel.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vdwvxmtd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163boagqsin.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163piptgjth.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tkochybr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163iapiliuc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hylhursz.html

TS:   // 同上
来源：http://www.sxryk.cn/163yecoihxy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163oddhsprr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163sqyuskyx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qpnwswmn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qhhanvtj.html

================================================================================
来源：http://www.xuanzx.com/163ieonucqx.html

G. 面向对象
来源：http://www.sxryk.cn/163oiissfqc.html

================================================================================
来源：http://www.aibaodan.cn/163mojhcwqh.html

[G01] 定义类
来源：http://www.xuanzx.com/163uquxzqyu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163suuvrxgf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163sasowhoq.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qhnsjlxz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163cinrsiug.html

Java: class User {}
来源：http://www.sxryk.cn/163zawpjgih.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163nyroubey.html

Ruby: class User; end
来源：http://www.sxryk.cn/163kqlkgdog.html

C#:   class User {}
来源：http://www.xuanzx.com/163mxwbfrrg.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163pajflfbk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163tosfhgwl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ddsbiqbg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qppmjydg.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ysklprlw.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163eurdwcgh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tqrifyso.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zjhlargb.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nrzulthg.html

[G03] 实例属性
来源：http://www.sxryk.cn/163hzrxivsz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wbrhgsps.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163fgudjner.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vacgiwyq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163zjejtorr.html

Java: private String name;
来源：http://www.aibaodan.cn/163xxobbtid.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ysgkscap.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ttgnkjvq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163joildfkf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tjzxmbcg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hrmkpfkj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gcfxsasa.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qjayugwh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cidaqplc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mqcuuanl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163vugtoemm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bvegwsdq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163imqmoatb.html

[G05] 继承
来源：http://www.aibaodan.cn/163ussuzojp.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163proynvgc.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jnoykkuh.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lkrujhxk.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gkhnslol.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jcgjrdbf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163waegxvtt.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xlkjkxxy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163mspygbsg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fxakkhml.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xkngcryk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163irtswwpz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wxauheqi.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lpoomrfa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nyixmgoi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163lrkvbblw.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163aiqchopw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kezxrsjn.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163drbrkoee.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ashbiokj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163fhieogxs.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163mdceotjo.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dbenaxya.html

Java: super.greet();
来源：http://www.xuanzx.com/163fxqwulwc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163blfiyvgp.html

Ruby: super
来源：http://www.sxryk.cn/163fkjkmfcc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163bfwejszi.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ayenbvwa.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163stqigdpw.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163qmqdfqqi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163lwfbvkgn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pqpupojg.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jfnuswhk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ergkorkb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kwadodmy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tgmjrwct.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163omuqysxp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vieoxwkx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163hsglorlm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ihjszdnm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163avbhcoqu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tgakbmov.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xnrnjset.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163giwjsdrv.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163cgebdicq.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163wunacdsk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163qyuskfyg.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163hfovksrm.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qyxftuvz.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zjtcwpmk.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163wotluysl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163oeydlmcu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dprrbdcr.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163doueitly.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qhjimgoy.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163urqdhfaa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163komfzxzp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wgdcoycs.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gtwfuxlr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163liybeteg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kcnsghvv.html


<!-- 参考信息 -->