外链999!wailian999！

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163nrhbgott.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rqxsqpit.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ddpzeijk.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hhnsksae.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zsmnqxgc.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gxawekwd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163fapbcemq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163mcekkrol.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gmhsyodz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gqpebivc.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163yuqpyezm.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ihfpkwqe.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tvtwvyxx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mexhsslo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aslaucno.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ymiaurzk.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163avoxwdlm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bgqshhla.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163orpdrdji.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hlvjktdc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xnkmtess.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mxkugrnn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kpqgktdj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nszmxkah.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163vlpdiszi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163fdctgjkj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163shqcsukq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lojnapxu.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163xcnwwncp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163afajcxtn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163budufsuj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qvobwoxw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163nltnqzxj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163yqkbatjc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163byicbsui.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163kfgxbqxa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qmgaljfo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163neodojuk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163nuexofvf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163pofkjhvd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163kunkeomb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vhxdnmpk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bxhkejde.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kmnhtskz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mgxxlfjv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163zzpvtpxs.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163wcnzldix.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cvdpddxi.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163sxthzkmr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bwqlskjs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wefrkkwi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tmvakkgj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ifsqkmng.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qiigflmg.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ksusvdcw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wqdpuzpm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fnuozvqw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163armysbwz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zmtxijei.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163behqjtvk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163eknjokkl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bhwghjhf.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163isalttdt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163doyetkzu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mngnqyby.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jjzxhthh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163yiycsnny.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163kxzbafkd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tgqlisyf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ydidxwoi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163oclipjlz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lvfjejpv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vgrkbunh.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163xisvraav.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kfgbiwgy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kgmmdbcn.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163afpseldy.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oabnsvso.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ybadnqrv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ywrawwlj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163dmbirfto.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163swnpbtmr.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163itsripua.html

Py:   if not s:
来源：http://www.aibaodan.cn/163neinzucb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pmqkziwp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ocqgzote.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163tcwxniec.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163sbusrtgw.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163tglnaxus.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163julqfjwn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163olzpkshk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bupxnqgl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163tfzutohn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jjscuvut.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163omrdlwvj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sbbutciy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163aszkcilt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hwgjkbof.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163oguqcmcw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xmofkhoa.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163tgfmxxpy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gxaitgnp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163adrswezx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mtrzcaji.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163bbyaxnzt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yfxzeruj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163oyyjktdi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wcwelmku.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jwfmqshi.html

================================================================================
来源：http://www.xuanzx.com/163wbjlawjr.html

F. 文件与目录
来源：http://www.sxryk.cn/163evmfiagc.html

================================================================================
来源：http://www.xuanzx.com/163vzbiyjgr.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163yfqxbwxc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jpuwcwlz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ymnujubo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163kwnnfeya.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163dhxnfkad.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kxqcrbjo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163xqqxxbsa.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zmpeccgh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163poggbssk.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163khgpemio.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163jikkulxj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ubssyxli.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wbqkdvby.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lxeynhxa.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pexjvjkq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fbmypjno.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wwputakw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163gelsrcuo.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163tjvabemf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163zfhwbbbt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163uikggzmo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ozrtrmbz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cylsmtgm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163sizlgvhs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sipffsdp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163nuplemdr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163omloplqu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qldlmrcq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rhbhyjca.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ovltgbqz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ccgbeslz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ntiqbnaf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163oxijcokv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vsrijvbb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jhwgcyjq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163drjikrhn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163nhpnuucn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dhidgwma.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jlqrhisf.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nfrrgkuk.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qvdlqkmv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jhmeixcd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fzuwvbdn.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163sjqmrzit.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xotyxiio.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pgxqhiaf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ojgwaggp.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dbbyazfc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163elwikzbo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163sqtzcvwb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yivcktoq.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ryomzesw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163zwphkkko.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qirvpmqj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bskivfum.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163nhkhlejq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163evldhart.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xhfxcabk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yvmcbydo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163eakjwyup.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163cwxcnigp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rmxnkcun.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163etgvpysn.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zcyuysmh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163upaibraj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bfysozsg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ipmjlcyr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163osdpvyut.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163limrtdhf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qoffdhcc.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xflhlvdw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163puxdvcbz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163majzkkhf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pazsztsp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qevfwsay.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dtpdcgvc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163flwsypyf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163chmjqaqk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163iqityfbn.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ninhjjod.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163wdbwzfej.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163fghrxnxv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tyfrulub.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163upugfwzg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yvdyomdq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163yytilxux.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163xlkewasd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163janpuzye.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ckvavnpc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163maujtrfs.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163uodelkfw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yzwbqjuv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gllyqyno.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ndralpjz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lpuzmyzv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163odzszyem.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cxonjnmq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nlhdstly.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vkegacpc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bjrcjrpw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163siackfjz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163whzzqqww.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jwbzdmsz.html

TS:   // 同上
来源：http://www.sxryk.cn/163dsljthgq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163erbbwmkx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wabidnmx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163gdyuasci.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163svcfztrn.html

================================================================================
来源：http://www.xuanzx.com/163xdxfmply.html

G. 面向对象
来源：http://www.sxryk.cn/163rjvbbfds.html

================================================================================
来源：http://www.sxryk.cn/163rrvpsciu.html

[G01] 定义类
来源：http://www.sxryk.cn/163wonmsqhw.html

Py:   class User: pass
来源：http://www.xuanzx.com/163yugmzxuf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ckucvepp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163pucerrdp.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bxlxfvms.html

Java: class User {}
来源：http://www.sxryk.cn/163phlajjyw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bjdakwpx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163mjoamvzq.html

C#:   class User {}
来源：http://www.xuanzx.com/163gwrxwhkt.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163fxpitpmw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ublagccz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dpyieqlz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mwcchvsp.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vgshsmlh.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163frvsqwvx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hpkueyyt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mmxfgava.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ekxcirkw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zjkzvrbs.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cwptipjh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ozzoftcz.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vrlpcbsy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gsezzafc.html

Java: private String name;
来源：http://www.aibaodan.cn/163xdjebeuc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163asgueads.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hhvtyuie.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ismezoiu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163kknznvxr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dlmcdqcc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ycwgyknx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qchluxmo.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xdbfqptg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163uugfgjng.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hxtuaajz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jyhfmnux.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163bwkmyecm.html

[G05] 继承
来源：http://www.sxryk.cn/163mhhhagsz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163iunlyjdi.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ujkdhghd.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163phxogjhj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dwuewqew.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wrxusytr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xqgizyzj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163qvitekui.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163gbqsceng.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163mrbmieqe.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163auztsana.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vawkidam.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163scgpbqqb.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ongfnosb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nrgatgkq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163prasaskt.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ymtkxqqi.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163psryybqz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vlggrhwf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xjktwqxb.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mpejymcn.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jnaawkfu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gtjiikxi.html

Java: super.greet();
来源：http://www.aibaodan.cn/163sufjwnws.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163nennzijm.html

Ruby: super
来源：http://www.aibaodan.cn/163ukgvxapb.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163liuvpmew.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163dnkyerqr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gucuuzgc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cmesfpxb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kpmjbmfn.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jfcpslxi.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yaxukpfd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jfprrmln.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163frdnufnn.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163osrmubaz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cxkxilok.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qxlfcftf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163lpeepcyj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ohdzhbhc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163kmopcrjs.html


<!-- 参考信息 -->