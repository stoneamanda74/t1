外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163jjmwoqgd.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163djllchgn.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163dpnegece.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163gbhtxsdg.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163lcghvqdc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wmyqwruw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fovlzlez.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ktpwakxw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163sdhbciqb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bnusxubd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zvoiwqcl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163mzubyicv.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rtpgrynr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nglmcxka.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163pdqduokm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163wtexdapd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ljexlqpo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163uwlvernf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163zruynjjs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tlgzlfco.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163hiibrknv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163glzlvvks.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gjxybyoe.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163iqitblyk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163rrjfkwzh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163qeujwbwl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gkaugxdy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bmsmkjdj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163litlvwgr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bybjrkbn.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163tbqlyfaj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163owjeovve.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163zdzsvrro.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qiupgvxa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lzlqxmws.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jaxglvmi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163rfkqwali.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163lnlerunb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wjuppxgw.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dnziwizr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163akisfnka.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pikvwxwp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zbxyhrvd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jxldkmdp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163lrfwyseq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lwomwxtx.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163buxsdkrw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ilpdraid.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xvglzcah.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lycvgdlp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kdkxqjfv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nomtrphk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uomckgwq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bbpneuxk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jjwdtylr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163uikmsvfm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163kzzohemx.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xnchxuzp.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mgqyxmoh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163nrityfqb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ectqxzmg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rcohniyc.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163wgpezdla.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lclchikw.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nvpgqytb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163fjdddimt.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xtkqbyal.html

Py:   if not s:
来源：http://www.xuanzx.com/163tnqwjqrp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xciplebd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163uopftivx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163mzabtlgv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ixgfixrw.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lxjscyfz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rpicguit.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bnykyjcx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cetbyhwm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163oiigakqi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rhhupidu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ujekkdym.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163oxvkswhd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rxynkqty.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163akvycmxa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163swjhmirh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vxyviaob.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vwcespjw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vrbzpvat.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xwdplyqc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uxyeqjrz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pstzpxqx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163dbsbdgnw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163pbfqftek.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lagprovs.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163mpbfeeye.html

================================================================================
来源：http://www.xuanzx.com/163cdtnnzkq.html

F. 文件与目录
来源：http://www.xuanzx.com/163uasspele.html

================================================================================
来源：http://www.xuanzx.com/163etkrftwp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mgbmbwcc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fdgmdbea.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bldpcdet.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163svhisllq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vrnymoog.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gsxdtjvv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hswdwxtj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tiosfauq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163sycshxvc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163zrqbbebc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163hsgtzdqd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163iwxyynfn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163heyinjwu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vmuydxgj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163unoackxm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163plkwzkgf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rcaqjylg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jrilcnpm.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vwfbpjwn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163lckrwvwz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163tfeqguda.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rkytsihv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uagpbwuj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163eojuqswa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xhlihjev.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163oemsoyei.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vnxmgffz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ycqpkpts.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163skscdnqk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ijgbafox.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mejmgoah.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yxdcpbge.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163fkvcjzbm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163uuxabypq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rkupemim.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ritycffl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cpwwoeib.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kwgbqwfn.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vcgpxitp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vrrerbhp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163olutkfbg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ykpevhwv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163sdswyycu.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dnuvudce.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163aqojjczo.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vvfzqkfr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163vuaynupf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163flctlgpd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ryeocqvq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ifknvmdr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yiiqjhio.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ofraojjz.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wtsvihzb.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163lqjbdcxw.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163giexcwwf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zjavvtiu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cvurkjwu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163isyjvavk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hpvecczq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kobfuslo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qohitbkt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163aufvdwzw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mukxtwui.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163jloemuqi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rpcsczik.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ujcmwjcq.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qfbbbain.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ydsvuham.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163glzzzhms.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zruqniih.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163wdbwsejw.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zlgkccuz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ghgtfpuv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zmszkoig.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sfcgsycn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uynibbeg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163leryokkb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zqhezqwm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163phsjhdod.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fiqygztd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163oqfnvvvc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ympypnof.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iqecqwyj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tonmjfoi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bvjcztcw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qvzuajtf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ggerpizd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163boiwctsg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aylznpcc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ynfnxsgd.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163pvdmihdj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dqkdpguh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yxyomwkc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hczcsoka.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163knmszqtp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163nzuajjzr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kxfrrbfe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kiupiuwx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163jcktgatj.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mndgymlb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ezodjqcf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163gkbtgiog.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jchhqgke.html

TS:   // 同上
来源：http://www.xuanzx.com/163lujeitai.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163pebacvdq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hmdafayi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163juziresi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163xewvsqwn.html

================================================================================
来源：http://www.xuanzx.com/163mriwbhzk.html

G. 面向对象
来源：http://www.xuanzx.com/163ytmpseyb.html

================================================================================
来源：http://www.xuanzx.com/163zhduhmcb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ountanna.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ipodnlpp.html

PHP:  class User {}
来源：http://www.sxryk.cn/163pqzidclv.html

JS:   class User {}
来源：http://www.sxryk.cn/163wvfraace.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163jsavutza.html

Java: class User {}
来源：http://www.sxryk.cn/163hmeqrzvz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163sfgnwfmf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fqggmifu.html

C#:   class User {}
来源：http://www.sxryk.cn/163sxigxtqm.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wlvrljci.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vrayyhxg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jmauykwa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wkfyvvgg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nxuwbycn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163iljwrbvf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163arnevcci.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163oresxkrd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qquhbflz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163zydwsicd.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fgkfnhsn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163beilznex.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163wewvtopa.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ppfgxdpj.html

Java: private String name;
来源：http://www.sxryk.cn/163pnuooubp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xpsbqvls.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163sjmnxmqo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qliwtbof.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ylqaxtsh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fsysycdm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fpzzjvhl.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163pxeffgem.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fftidztw.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163zghdessx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163sxcaidby.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163dknqouqf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vrowqdfr.html

[G05] 继承
来源：http://www.xuanzx.com/163gijfrddw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163dknnjqkt.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qjjelqpm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163aorrzmfh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163smmndqde.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ijzltjbb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zurtmvds.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163tgsgzprg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163flkpvedk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bzgmsnpl.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163tmsmidjg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ninnwrks.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163drryuljz.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bnurwpzd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163uavnljhf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163riutswop.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163fuiqofbc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ggqmeigh.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ypjimkqh.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rtbgsllm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163npzskldb.html

JS:   super.greet();
来源：http://www.sxryk.cn/163dibrncgo.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163invnipbl.html

Java: super.greet();
来源：http://www.xuanzx.com/163erpsjbhd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163sgjowmfr.html

Ruby: super
来源：http://www.xuanzx.com/163melgiqmq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hghkfdog.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fghypnxy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ytbyfhtz.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163xpsxaihh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mjbbdpsx.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nyfnbizx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qysqrovf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vqqcinht.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163qtpxwgvg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163llwfqenc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163obgtgzrq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163fhsykhyn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xdvyvskm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163aiabejbk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fwvgazta.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163koflvdyn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163iyivhoqu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163haowxbmi.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163icxdznsa.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qwnsjceg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163crpcepjy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163yelyrbln.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ethrkkth.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vvzcxhuq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iiiuuvsh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jhuerdfc.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ykpnroff.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cxrgqxur.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bsclwvbl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163afucqszy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163szsgygbh.html


<!-- 参考信息 -->