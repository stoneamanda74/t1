外链999!wailian999！

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mdphwggf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163pwarnvei.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kxeqrvtj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hdgxccfi.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rjgthhvn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nwecyjbi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hwgtxdew.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ozvpqrrw.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qwmbgzuq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mgiteqhy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163aentaegu.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wtwbprzx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vbdatvvl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kgbdyaks.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163frbprhex.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163lcwofvtl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qhcgfokt.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ctekabyh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163gkajixzk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163faoormuo.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163wdualzil.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163woouizzy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mdmzwlpf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lttqofjq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163drusvbwu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163keacbtoo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ldbusfkh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ulbgpfrj.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163wuquglja.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163zddfnbhl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163taeswbwz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vdvqjyqi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163brfewyua.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jexfxiwn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163tfjknmvf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hwuhmiie.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ytalvmor.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tphyxgdf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163rcsnqgst.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163cuqxfzfs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ycojqvig.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163pltpfbyp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163egibuhwr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163vtkujiau.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ernwiwvl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gsxmvdcm.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163taxmcqvr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163incqawtb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163leidwnwn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sbbabvir.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rpphtsrx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163rutcqeho.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163emwrfnql.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163wboonywa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pjrmplnn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163teproblu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163tnqektjq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ztzrgyyl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pxyzxlrd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dtrilmuo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bojfuuvi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pkjqwvrk.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163kvvyqaxu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163hzffcdst.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bcmrdgny.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wivxzmca.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163wzwbrbkw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163doehbggv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163soyxxcra.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lfzswshz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zhzvakcw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sdbhfifd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163cxkullgz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163pjvaixym.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ieicpyxm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163oljoqetw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163muxrfedz.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gmjhwkpv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163qdpqamzz.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jckrudye.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ilfhtncd.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vpwadowr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ylczphnt.html

Py:   if not s:
来源：http://www.xuanzx.com/163kuwmbpyf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ztnpvqep.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163bzjeldsf.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163umbrsred.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163levoopvl.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zabdgomd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ussrudvw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qfgqlelk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bkmrgcma.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vvpghqzd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qxjnwvyl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qzzfuyit.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ulkucrfi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163thofyqgy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163qaffjjta.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nhynozqk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cukrdlvk.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ntppdinn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163llxtpqnl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ygnaspji.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vgwosnjq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163toaquonv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gvjdanlr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163axzlvoko.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ntlmnhzn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ukacnpxg.html

================================================================================
来源：http://www.xuanzx.com/163pzrjmeut.html

F. 文件与目录
来源：http://www.sxryk.cn/163pzearntb.html

================================================================================
来源：http://www.sxryk.cn/163yjjoqplx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wjtrqbff.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zwyskxby.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163zgjjbqas.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163pdcabsgc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163cdcpsrcz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ksxhtlqo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163jbvyxhrf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hkqdzhul.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ijpzvlpt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163eszybskd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jsnkauuv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163nhvxiljt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163orrsccrd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163djnksehx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163easqfthk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qpqnooap.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163fptkazba.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wectzpni.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163itxyrmde.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nbjifumb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ukixxdpo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163eczfyfdp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jofyeyfh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ukvdwkjy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163wsijgdmh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dnlvpvkw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163enfualvb.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cpxpnwhd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kncmxitu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qiemirnh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dcrzudbe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gtubhpgf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xgzzftmj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ahoyrogg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163jrezibyo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zrqdcmzh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jdtrfrrc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wotblpey.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zyzdodvr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ayybjeio.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sjwdlpph.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163prnwovob.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jfmjhcvw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ocskmizm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163bsxukcos.html

[F06] 删除文件
来源：http://www.sxryk.cn/163iaagvblc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163clluaqil.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gxptsisz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163sxtzhhae.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eokjaavn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163szzyspdq.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163udrcqysd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lgpyxboh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rihfxgwu.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gsunpvry.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ldgjcghl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163voqhrnnc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rjmueigb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mdpicuek.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163iupuqzue.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ddvragop.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163enojvntx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163locsrbxb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tvhuitwt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163kwcdquja.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163djcywppo.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gihhplcu.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163xzgecjfb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163isjkrtul.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163yxzhsagd.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163uasqnaie.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163pqcyzhlm.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163suwrsfjj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163gcpnvygn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pojuikta.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163iynmlays.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163syfmwaxd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lofnugml.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lsoyfmcm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jcjvxsov.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kvzrghzp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hyoxbbus.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zsjqfqhf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163fcofxpcd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bluxmtpr.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zsabqmpu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ivzmmtcs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cisfdlog.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163olrkrzcz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163qfctjqhf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163hxrmauog.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lvqiynbd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xccxpaep.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sckegnkq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jakwlbeq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163yotlnyqq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ewbcrdnv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qcgdabjv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bltjuvle.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rlypunso.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163odusvaav.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163jrmoikoy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163inqgvlbi.html

TS:   // 同上
来源：http://www.aibaodan.cn/163yahmfxdm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163pwckzmdw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rcsfsagp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rltxqzde.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163nlhstbcq.html

================================================================================
来源：http://www.aibaodan.cn/163tgqwxfki.html

G. 面向对象
来源：http://www.sxryk.cn/163meokqpmz.html

================================================================================
来源：http://www.sxryk.cn/163gsbnopus.html

[G01] 定义类
来源：http://www.xuanzx.com/163tgfwbseh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163kfgafhgh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163arvilvag.html

JS:   class User {}
来源：http://www.xuanzx.com/163dgncawen.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mgrdgbuj.html

Java: class User {}
来源：http://www.aibaodan.cn/163ehqenjcf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wlieftjb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163sbhubjav.html

C#:   class User {}
来源：http://www.aibaodan.cn/163llpgnhdq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163uthxgiyf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ydkhytwg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163fvcqiauz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kgfpunhq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ubzxfgml.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dmeqfdhu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163dshmxogi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163myngvwdl.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gcgaxddm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163dxdppdve.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ksuyzrtj.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163txvfqoxw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rqhscjfz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ucdiohjz.html

Java: private String name;
来源：http://www.sxryk.cn/163ptlgfamc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jwidubso.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gbwkhpid.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wutkwaya.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ossupwld.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163jobagqml.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sndmcmqc.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163jmambkmc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fcvoqvon.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163qchypuxi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163umkbzilt.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kfvdnqew.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tfwvlukn.html

[G05] 继承
来源：http://www.aibaodan.cn/163stnbusbf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163sslnhvrh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163oujpveqg.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ezwmexeo.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hjbjtvgv.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ozfhetdn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vvlekqlb.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163yrqvtyxr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zqiedukk.html

[G06] 重写方法
来源：http://www.sxryk.cn/163hxiztktz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163cuoqonal.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163oxpmgtho.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bcuoqsmb.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qnydsxge.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163dwyxdsoi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163cnwswhzl.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163fhwinjxa.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dzdqawzt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163fhocnxhf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163uanvapih.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163pdabtjkv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163hbmksori.html

TS:   super.greet();
来源：http://www.sxryk.cn/163okzqsvnj.html

Java: super.greet();
来源：http://www.sxryk.cn/163eogssmpz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163gvrpjlje.html

Ruby: super
来源：http://www.sxryk.cn/163yvqhohez.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lclcaela.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lqslgybg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rxyxrrzi.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163nqkvgpcv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wgpwtoyb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rstumydd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163btpylyym.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163rywxmfbp.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163yzdllzck.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nvldndwe.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tmlwvpac.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163irqkbdwg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dnjdxosa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163pqoxgixf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tfahfyzi.html


<!-- 参考信息 -->