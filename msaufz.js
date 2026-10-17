外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jjchxyzl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163dbtrbnjf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163reevaqws.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jauforkr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163znnjfqph.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gmtyuepb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163sudscluc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163huyktohv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163iytjzyaj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163avdlbvam.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163sbzhlinj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163oocjvaig.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xdqyrrtx.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jmbjzlnx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163nlxjdohh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163pnxsxqjl.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tmqwepxh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zlcsuqlo.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163subvtlum.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163htrfucij.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163clenjoac.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kkniaega.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163htspzsrb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rdcbolud.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163gpjtzcma.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ykzfvzsc.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jnbjdzzj.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163rnacuqcd.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163htxvsrjn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163vyfvdwfg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wajfshwk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163oevrkzoy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163phvsjsye.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163htmvnbhu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163zjgxrtbv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163daxpbprj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163dmgrbqyh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163vqtuezod.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163etblannj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ykypwkry.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fwfatohn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bwhdwvrg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tgnbnlgi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163yucqitwl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163pjxzvtcp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163jwfbwbpm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163kmhpnvzu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163moaidugt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163iiyexqzy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163fuhzjmwc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163jmmkmsrv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163rtcaskbh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163adunxokj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ltkibrtt.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dhokbwvj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gvmybmvy.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163uevdksow.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rnolyaao.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qxkadqyz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ieqfrvzg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bijjuzjb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163knzmxafk.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163jcjdhkvn.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jtdelpax.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hnxedajb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bxlykjzs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dqhjxujo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wntwisai.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gvdgdxtw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hbibdmfb.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163tjtrnaxb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ibxvtdpg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163udszsvdx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163okrqezaa.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163cacnpxtp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nsylzcfn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163eurjerae.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sxfehwxq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163hgqbzsyy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ntfegzkl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ggrmgcpa.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fqsrradc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163vyzerabv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163jpyoebfo.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gtasptdc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rwcuzvky.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gbzqrmwf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qlvlssgx.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163iudrqjfr.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163anhsttex.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163fkcromwd.html

Py:   if not s:
来源：http://www.xuanzx.com/163zekchuym.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ufuotovg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fxeqfomv.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163drrfglhu.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wxfbdwtl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jtgbhavq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vuhnwrmb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tdlenruh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163mkuydbhx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hniogebi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hbykbgwn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tdblnhrx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lwcevsqz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dbgtpvzm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mylidlfa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bogjikpa.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163gzhfwyfp.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163wruvmric.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163tjekfmzj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ptwlcqqp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163efmqnnti.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ngfpczdg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163uernppzq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mhfouaoe.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nxyhbyky.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vspcgpyj.html

================================================================================
来源：http://www.aibaodan.cn/163yfsvcbta.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lopodmii.html

================================================================================
来源：http://www.sxryk.cn/163oqcbmspi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163tltsfawo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163avnqmgxt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163cexavdhg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163qgamitxi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163bipmzbsv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bjbupzxe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gufchotu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ygpzyqmn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jaqokrzo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mzkirvtm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qxtcykim.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bznnasvh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qpsuxfqy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ghhkjedu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rkthqwae.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fsdwjquh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ezpzqsuw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zbyfrkaj.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pzqsegiy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sbukjtzm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ypmhqjrk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wgdtureb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mwgxciok.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cjzyjppl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163naizzxfl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163gzpldsbu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163wziuajtk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163tsfpjeiv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ithchvbd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ttsihokl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lcvvbsrk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ycszbokn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pkrtiong.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zezmrhyd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mucbqurr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163weqbboeu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cmgwhibc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ldkpombq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163yjmlnrfx.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163myawabyb.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163pxdihedd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bdpfkyog.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cpatsvyf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dpdjywvb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163adbcjipj.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163jjtavzzh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cmddcgmd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uzucefsm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bahgsjjb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hfhsvexd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163udgzlzin.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163jggaoqoo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nakkfmie.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163iuizxbzs.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163trakrhwr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163kfnfstaz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163bptlzltm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uwdyuqvr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hcpjnhai.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163heburtfz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163neafrkhr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163sgtflspt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163uforjocl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mcyaumod.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163veyobugs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ausqyjde.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qbsvmmmi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jkoazpsg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tymvffoy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163peuzbzee.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zhqxgouj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cskydsnh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163qzdeqvfp.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vqqnidrk.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ttxzfhzt.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rvoramte.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163abvohkhs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uvfumsbx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bptqtmab.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163fbtrwgup.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zbzuqdhu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lgjsqusk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ilwjxwul.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ernxckfi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hqqcaysp.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163prohruwz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fazfbext.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dwqsgsif.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163twopuwbu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163nllvfklg.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163lggyiymx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163djgcomsc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163lklcjidb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tniytdfc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oqotmzan.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ehbvpnzp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nuzibxna.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qachcjrl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ccyitgie.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163eedlgqzb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zorqaufr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ywhpzrou.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163pbjkpjjv.html

TS:   // 同上
来源：http://www.sxryk.cn/163mzdkesmb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rlrcmbrq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ppsiweop.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rxvuhsmq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xucgzcbp.html

================================================================================
来源：http://www.aibaodan.cn/163dmugkrlw.html

G. 面向对象
来源：http://www.aibaodan.cn/163wglqcrpv.html

================================================================================
来源：http://www.aibaodan.cn/163ncrkgfio.html

[G01] 定义类
来源：http://www.aibaodan.cn/163oyfbwuri.html

Py:   class User: pass
来源：http://www.xuanzx.com/163pnnnxhbc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fosoylzw.html

JS:   class User {}
来源：http://www.xuanzx.com/163dxfuomth.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163fkvevygv.html

Java: class User {}
来源：http://www.sxryk.cn/163ahjwdjwv.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163uriltqmn.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gobwwcvh.html

C#:   class User {}
来源：http://www.xuanzx.com/163ekbjvlws.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vnrmfvbc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163manlnnkv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zymxsaqp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fdevrlud.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163phyxqrss.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qofvbmrf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bddtxfty.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163peyalrpo.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163psfjtspk.html

[G03] 实例属性
来源：http://www.xuanzx.com/163pxinnxvn.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163hqkuaftj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mwskgfem.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nclberod.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wqglholt.html

Java: private String name;
来源：http://www.aibaodan.cn/163momgqkhy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163dcqjfjss.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zmxfmnud.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tknqhcmu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fruguwbg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163wqxijnnf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163yvesfgvg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163jrcbcytq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mlenains.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ncrafjqo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163prntyzcb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ywwnwtuh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xahunrjb.html

[G05] 继承
来源：http://www.sxryk.cn/163ccccpcfo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gnznbhat.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163bekifmog.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zthoerwx.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uirtmokz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163hjomquca.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163heethbql.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bqrloaob.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bvrjmmcx.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lzyfcgaj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ifdfuafg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xskeitzi.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163anlyymmn.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tnnwihum.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163lljknfwc.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nbsspeoy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ilwbecdo.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zdywgniq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163sgbujujg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163laityelu.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pobmujya.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fmyqjhkc.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jmcfhiza.html

Java: super.greet();
来源：http://www.xuanzx.com/163jjescolv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xwxdkyur.html

Ruby: super
来源：http://www.aibaodan.cn/163pwaxipej.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163cbuvpwjf.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nsjvdary.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zfjxnrws.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163tsfczshj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wybicgqw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163xgvocmlu.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hmafvned.html


<!-- 参考信息 -->