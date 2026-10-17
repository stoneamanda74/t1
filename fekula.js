外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163rixydjou.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163bvlgexwb.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163viisschj.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163cnwlrvel.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zcftvjof.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163mwlcwatr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zumdynqo.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163cecxepfc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qoymvegf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163fbmgctqy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xkarwiba.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hksvgtcp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163vdraexjb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ohyqeepv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163lepjsjxa.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163pidwfvmf.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ozfdmvxj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lxbwlxuk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163iwuumrka.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vgyjxwje.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qocticxx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163hcmbbcri.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163nuldlvra.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163aqahqfrx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hleyagwy.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163wbcooqaf.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163djqdcpvr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wipzbibg.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zhyinvss.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vqncwoqu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163cgszvcih.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163pvzpzmow.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wbdhfqvk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163sjisosyz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163pfvdyqsx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163kdkvvqca.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ofdelphk.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vuujayvv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zbighdfj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163uplqdwnc.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163cumdyytn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163swqkixhd.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rfenqznt.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163efqvbbqp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163lpjgijyu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163zlocauxd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nhlzekjn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vjeshgkx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mdrdayct.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pkluomzg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163zuaqmtif.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163gapjptbd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163pbdhtdmf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163swrliozr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mjqhowpp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163cjyxujmx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bxcuxzls.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ulhuwirm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163pcwevlcf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hkpgcwrv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qfuljabv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kqnzlwpo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zszduzwf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163pkmuqcaq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cieiiyly.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dpwwartp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hnqrhiya.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ddqggvex.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163kpimcqgd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ibznbypm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163swwysxtk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163bcsieqtq.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qjryhnjd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nduzfuvc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mlxadujx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163iovfjmhg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163yejupebn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ajslpyry.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tcaodvze.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cjkabope.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163nziqxywh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163aybicdxr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vsruclsl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kwfitnxs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rxxvdkmh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hnterlib.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163aopzmmwh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163rfaujcfn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163dpdwimac.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163fbfswnxi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163vucpytwk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fcazlywd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nwamqghg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ylacwkxk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163klkgvvlc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163fkuuzbln.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yxgqvcmc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wjjpyzfq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163pyxrzfxb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163niktjcxu.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zmfrvdfh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ikroigzz.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163knkttugf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ysbstjwo.html

Ruby: s.lines
来源：http://www.xuanzx.com/163evgsdobr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qgmyaert.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163pdsatutk.html

Py:   if not s:
来源：http://www.sxryk.cn/163xogryect.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hrfbnyhw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kcniochw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uggfwgly.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wjbvwkes.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ciomddif.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163awukpdbi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vvzhspop.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163stpsofwf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ekltsfhl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ovxuqzzo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gaykmtqw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eijqegst.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kbzrgbbv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rxmxiykk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vpdkkgqx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kvinqfje.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163qddtdkbn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zhqenurt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lavdpzzw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163chcjutbn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bicgtbwv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163xwkrdkpn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163oibdxfnk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163iwwddstz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163aivvzdrr.html

================================================================================
来源：http://www.aibaodan.cn/163dpbrvfuw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ggnpfmid.html

================================================================================
来源：http://www.xuanzx.com/163soyssfif.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163midxltrp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zzaxtuse.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163dzdgnbpc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ouipplho.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pehlejmn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163avefirzl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gepqpznt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gwkwnpfl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163uwgkzkya.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bhzlmoxw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ekvnryjn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163boetvohi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nknztrzc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sidswtyi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oqmkdawi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kdqtbeoq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163advqwxyb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163euohqecj.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163eupyeblx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163chpoimfx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163thrcazej.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jytkbdkd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uujgjwzi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ackrncof.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wvhrrlgb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ukjuwufm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163idbuhadc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wiirekai.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ysjeysly.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163lyqvjsax.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jzuzmwma.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lacvpcao.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163mkpsdjcj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163xshrfmsg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163dqprvmiw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jmpiircf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163yzuwgety.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163itffoqmx.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yzixhbbx.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fflccqqd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fjtyctde.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tigfaqxf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ngeepkbs.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xmanoaqp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cktuvzet.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fdbnzbyu.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163orcrvygh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163cakoezwn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vrruzqxl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vvtiddds.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jmnvepib.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163laytzuem.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163sznagarl.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gxadbswh.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163anshurju.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163qfbdqqtt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163sayngivi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dpiiwsce.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163blaacqpy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163yvvhvvhp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163bxbpnzpq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163xxtvbtks.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ydhavhgf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dlzdsvvx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ehdnmxux.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163oyiqfbpx.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163cobeexhk.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jidaduel.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zhwucpei.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163genidfjx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gqrghusw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ypvznfyl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163njblouwq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ezeoimxu.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jggmtgbj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163oyvlaide.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jojasmkk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hqkfjuoh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mxboonql.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163pdvsessy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163shewphjx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xjcijepc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wgqibbaj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163kdlpygfg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jkrohjes.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zhnzgxdv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163vwpdtmlz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vjbptckn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cimyxwfv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163epyyplph.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163mddpvwcn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rpkpxdmw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ldqqfyrn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163agxtoeck.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qeaaotja.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lnukyrtk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ihxpvvgm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bzxzpuhj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mnekmmuy.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163hkbgjprm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qlecioxz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163guwtewgg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163exaqreyn.html

TS:   // 同上
来源：http://www.xuanzx.com/163xcbuepug.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163meakccqv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163grjpruyi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163edpqedcq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163shxwidmx.html

================================================================================
来源：http://www.xuanzx.com/163mmztqovd.html

G. 面向对象
来源：http://www.sxryk.cn/163etzheftw.html

================================================================================
来源：http://www.aibaodan.cn/163tiwrziwy.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ttobqtvx.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163iewuydwg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163rzunmgwc.html

JS:   class User {}
来源：http://www.sxryk.cn/163zvgmfvrf.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163spbyecwk.html

Java: class User {}
来源：http://www.xuanzx.com/163ppigsebh.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kxjtzunz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163upzguoiz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zqursgbm.html

[G02] 构造函数
来源：http://www.sxryk.cn/163hhtrczwm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jjcjrxqo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yezeatqi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163elnvfpzm.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163rqrelhwd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qhklsego.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ujytrrfr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jtqxyvhg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pvtapdpe.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163bcbhlvxx.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163tkalgcry.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ikeairyb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163snyazifi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163yktcwzno.html

Java: private String name;
来源：http://www.sxryk.cn/163ytzvrrdn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163icfryvzh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wmqgpjbr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163mnlfrxwd.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kprnofsj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fqzlgugo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ildntqjz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163yawzrywg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ujgdpdpt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163racbgtif.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mydhpcsu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163icywzjql.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oynelmal.html

[G05] 继承
来源：http://www.xuanzx.com/163htxmlplo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xfovgjbi.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jtmuwkup.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mgfadoxz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bmveqtdq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163cidzvtse.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163drnamrbi.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163drdpjgid.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zsuiigfj.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bmntaegy.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zwuxrpkf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ooznolfh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163txtcjsdc.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kdlwbtem.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ompkwffk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zfanquje.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kylkobhn.html


<!-- 参考信息 -->