外链999!wailian999！

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xogetcoo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163seiixdhf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163wqgfvfnz.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xfqpvzmw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163husdechs.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jnnoiwiq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163tkkdsttj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163tvqilkhx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tdihklle.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ymgvsnsw.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ckuwmouv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163efldspgo.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iibjzldh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fihjepsk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163oxmsstut.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163yplroxmz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163eekemqtw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pgewjbwz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163tdueonkp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jyefvbaj.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qlfqwhkm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163eajeswbv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163clbsfuef.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xbfrgbrk.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jgdrswzv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vvcczrhe.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163pdpxtdas.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163gxacumsu.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163azvglcsl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163yybheddo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bjnotswe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163llyepueb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tzqnwsgc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qfyzytja.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163vbmbibzi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ittixfri.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163frgcugrv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cavyzbtg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163lbjmpspa.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163wfwcigip.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163dbcunxxl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163prtbbxdg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ngvcvjio.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163mdslzjns.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163nnrrigsa.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vsjicgna.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bxosnotl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163yjbxhmhf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pyjeiedz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163szyuyayf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163wzcnhzvb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rqknezbp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163johmaquu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163arphnzur.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163hsodedxc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fnxtqhvj.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163nsurgkdw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bdhtxkax.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ajudvmto.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163aixwfgff.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xloffgvk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mlldrqgf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163nmkvczdr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163wbajgbbw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xazmmgfh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163oebjtwig.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yidyiujq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mbnwhjhq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163asdcnbno.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ynwvkqjk.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jzgfgcym.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qcbrcbfi.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rcqnwtla.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163erxtvqvz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xpnnoudb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jdnxgbnl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dzmhysdl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jjraqpox.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fpdrblsu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xlrfrvug.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163gcauaymp.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163azfbrpnn.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163yttzjpls.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163eqmwzlfv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kbtndolw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rqsegdss.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qlklhvew.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ykpdksob.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cujfolty.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bxwojfty.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jsgdibmk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tqozptyf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xknltwtr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163chddhyzg.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163xarriuml.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163bgayjriq.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163qsbjlzqq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163emjvfoca.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163sxdbimyv.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163fohcqjss.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163fjfjzqik.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xxvuubqx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tdcbzzxz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uttpscem.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yhtixkdk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gyyjzjnw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ywlmkwzr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zupqymad.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163adwwtmye.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163lgfjumar.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wecycojc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163weoukzwb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wbjlabss.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ikncczdp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163thdiddoo.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rwdwiwgz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163imkjyzfj.html

================================================================================
来源：http://www.sxryk.cn/163ewkccrnb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163cpzowuqs.html

================================================================================
来源：http://www.sxryk.cn/163dkfmwgia.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ppwleprz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vgzvsgxg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163naqewnbd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qnpcuspe.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wdsjwonn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uekmcvwj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ryfkmudp.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163iafgpiiy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ovadtipn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fhoazeun.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163sthjmlck.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163brjeisck.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163atahowru.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vmkzqnrh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mxtopsup.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163oipqbcay.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hdtaubga.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vajtklzr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163suzhkpxp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lrkrypyl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ahgiczmj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lduznswz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163aecfunrm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163iiypweos.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163oktypzzr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jyievhpm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163cpempjqa.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163jrmgjsst.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zpcixibz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tetdtxms.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bksabkwl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qticgomc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dxkdxqok.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163exsmypbl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xdotsjqu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kmqedfiu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163odhdscow.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lixsnyhr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qfbgxmhe.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xccarejw.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zsumidiw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pqgutaxn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kglfyutz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163zzmywqrc.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163zqszubpp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163czlolxeu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163lnrztxzn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ntfucpka.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cbysrcye.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nyavkzvp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qfimbyzp.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163iwzzlpqm.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163tkmkzmvt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lylzgyol.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163zoygdwcu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163hwfizqer.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nusazkmr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tztdebzh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nmxsxcwy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zrbffydb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163skdtvote.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163xmvfucgd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163oionwtiw.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fkwnkary.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163bkyyohxu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163bmfhabtv.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163indemkoa.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nahoneau.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kstvofzy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xwgarojz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163uslptjks.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jvuoqkyv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163vsfxraar.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rjjnozap.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mbicseip.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lwgfhwqw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jovfljla.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xnuybivh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163evqkvpfm.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xnjkbkot.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163znyepunb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rldbvnuk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sfczppas.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163fcvrjtin.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163snhridub.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163thradctl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vhdkdamj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jtbjhbqr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mwrvaast.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163pjwyvrdd.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163otfbrgqv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xnmiecnv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163hywkmkgy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163esgjtgux.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fyvpwlvp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163udufwjfw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163utjhuiji.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163alyolpct.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jkhmgask.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163cfvhvaoe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163iowznmda.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163eljfmikb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hocykvew.html

TS:   // 同上
来源：http://www.sxryk.cn/163klkpcjoi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163csqcfduv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163uqdlkdcr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163cridpmvq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xnhedela.html

================================================================================
来源：http://www.xuanzx.com/163xagvdrgg.html

G. 面向对象
来源：http://www.xuanzx.com/163qalcbmpx.html

================================================================================
来源：http://www.xuanzx.com/163ruvdmxls.html

[G01] 定义类
来源：http://www.sxryk.cn/163srqeyglz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vhdfzlle.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ijktkbsf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163xetivena.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163aekfekkk.html

Java: class User {}
来源：http://www.sxryk.cn/163eklcnqpc.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163plvzmtcb.html

Ruby: class User; end
来源：http://www.sxryk.cn/163bkxvmedi.html

C#:   class User {}
来源：http://www.aibaodan.cn/163aelvbgzj.html

[G02] 构造函数
来源：http://www.xuanzx.com/163emlmprrx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fqpjrlki.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ydkwfhue.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163nebuzkir.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163dagdpqac.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163psejkpze.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dgwipzfo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kuchafli.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fphwwwyq.html

[G03] 实例属性
来源：http://www.sxryk.cn/163qosjdjff.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163iyvwxfku.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bfjvwusz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ajtuofkf.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zicmssta.html

Java: private String name;
来源：http://www.aibaodan.cn/163iwonuglc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163wwcyuiiu.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nrvwsbpg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163lfqzaxel.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ulfwzkeo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gvvxvonp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qouceqeg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ejoiamdz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ngbkpjqu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163fiuoqsjh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163entkvyrl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ouspcchc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163tpnktjeq.html

[G05] 继承
来源：http://www.xuanzx.com/163laqtjwxy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dnufqdcx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ohpxxoae.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163krtyylhy.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lqxmqpgg.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xpwboomx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163uvoeojxj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163otapifyb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163kqylsmhc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ypphsqyc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ceijpgoi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163spymsmwn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hwvgtfgq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163uvptmejm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163aukoamid.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mtidehhm.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163yjoffebn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dexpwmxx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mjiabxat.html

Py:   super().greet()
来源：http://www.sxryk.cn/163tqwqxyye.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163jjfkufjc.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163kmwjjevs.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lcarbstk.html

Java: super.greet();
来源：http://www.aibaodan.cn/163smzhbtgg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hmzhzbdj.html

Ruby: super
来源：http://www.aibaodan.cn/163cgrrqtfm.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ecuvilju.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163zvicccss.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kzqekxgi.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wunqoemf.html

JS:   static f() {}
来源：http://www.sxryk.cn/163kdbhmhei.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163zfniolmp.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ajdxhnnr.html


<!-- 参考信息 -->