外链999!wailian999！

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163memwyvmx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qdsoxkru.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163wlqedqto.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fwldquij.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163cqdoeqbe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163zkgdrxun.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bzsdnylq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163cnceqrmh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163kvuzdukq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ofccpbmc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163fkagqges.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163vzqmzrrq.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uwqbrixz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163uiloogaa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163msdnedpy.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vyaucmoo.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ntjpscqy.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163yypwfhyo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163gfxujhag.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163kysxcbzc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163nqzsntux.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163rnlevdcm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bbwfylsg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163fnucfauz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163amzuyviv.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vwkjoxds.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163cgsmrtns.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lhnveydu.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163tjshjlrc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cmckmhvj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163guhxijxr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ljwusdos.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163eupuujlr.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cqigwoxd.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fgiokqyy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163nwgyzfvg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163oanmxmip.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163yjgonbwk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ytqfpjvv.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uktapcbs.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163slzpxyyn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wtcorngv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sbswrnlu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ncthlfqb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163csctsjoq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163carobgya.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gsyuirar.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163tcabnvpx.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lizrzsem.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lwaogjlb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yrjttrmi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163szycehlr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163flxyhnpl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163opktzxqt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163sybgemxk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163aqabamsm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qgbciqki.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163gfaekbca.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163yxuyvxya.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ywsjgvwg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163tdurlyqf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jvhnaxsn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163dkvtwpnu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163xtvboktw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jmnvtxji.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fuhgrwui.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dxokqktz.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163mxunfnea.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ymvyadbr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jgmtmnxp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qiwfxhkc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ltszowsu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163icdkmopg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qvljbdbr.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163yaucnzkc.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163slxuuudi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pciarara.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rsrnzxfm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yvopdruf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wkzsdwuq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zkwygieg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lmdgguxp.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ndjmqcpf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xfqsuhln.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rrtrqnlh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163nqiwpwfq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ybylnhno.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163srulhwzm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163enhcuzmn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pnxxyjlc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wnkanyni.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163baxzawmu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fidhywoo.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163bcbdnffj.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jegvsnim.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pwskkktp.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gqrshaae.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lbbztjjf.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163sypclobm.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163dfypcbwk.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vvqmigbe.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zaidfaqk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xrzjyaqa.html

Py:   if not s:
来源：http://www.sxryk.cn/163xgysysxg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bzrsdgaw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163cvlapkck.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cxdqfqmi.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163tteckwtf.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163pwfkcmse.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163hgxdbcwr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rwnxeivc.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163coruqeyr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dzdnqjph.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ipfltsxn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163buzezugo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cgvgxwus.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vdasqgth.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163cdxccxoy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163uvbpvyil.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163gybxmrsy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163uwpbauwp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163xnpjkled.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163frvekjse.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sckcblxb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pwikpror.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ugtailbt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163aucztmqg.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hgrdxeur.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163yvoagsph.html

================================================================================
来源：http://www.sxryk.cn/163rfelnuaw.html

F. 文件与目录
来源：http://www.xuanzx.com/163hcodefge.html

================================================================================
来源：http://www.aibaodan.cn/163kitegzqk.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163yoqjrutw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163negihylr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163upwjcjjo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163pgjmkosi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rqqolgik.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fcwhlnue.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163izumbmfv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163fmzfkexa.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163xsicwdlq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yxwatzcf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163psicoxiy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163wtqwlkdg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bthplvlz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hohumnwh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163howgoene.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163piiwdrkx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tfzulftm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ilwjnfxz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163pvyrakxr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163suyfkhqi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jwlonyqv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vmdyrgrn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zfqmuiyo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ygegmscq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ruhexvre.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dqptbvfa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qrnykezs.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nnapimek.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163byfvrdzf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163oehdnasw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bbruhnms.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lrwxxwsj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gvunvpux.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163iyisgaht.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163avxhmdgk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163zkzkmuug.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qekggijd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163zkxutoar.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163rtljwiby.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163havolbnm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kbmmiopg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wowlvrbl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163cvkfgeku.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163olhskxoc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xczkupqv.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ozrjeuah.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ivpkaaix.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163enfdalxs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vhfkuivj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163iymhnnqn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rdjvgtau.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163kjgmggax.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nitslhxw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163serderlf.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fhouwgay.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163kwfpklvk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163whzedzor.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mhmzppcn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163szyihkna.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163cuojtjtf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lwqwzwsv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163aluwkuaz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163fqadxuih.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ncotmclw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163unhfwpgz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163abhjmbfg.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ipafpmab.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rrggfhzu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ipzprekc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163yhfzjbvt.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163fyvamrvy.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pgjcmmao.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ehzenrri.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163luttdmqd.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zqueieoc.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xdfnsotv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fmcggjan.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eaijbcwk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163aqaskwnv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163nswuvgfu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163guxombcx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lvdaceom.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mpljjtvg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ihwtyjxf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163phbrregz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163xgcdyxjb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163abbczmds.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163cjpbawuw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xcrwytkc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vkcqaheq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fcqpfbul.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ixzhgbzg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163fqcuecph.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wukkuskl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rwnlhywy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dcfaghep.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163naydhwzs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163neomtacs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163yyyqqtyz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ybwqpvka.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163sbwwfivu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163wkybaepg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ycgamxrt.html

TS:   // 同上
来源：http://www.xuanzx.com/163jwhbvkyn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163elgoadic.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qjdpxzmj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dlrzslef.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163exmcvkhf.html

================================================================================
来源：http://www.aibaodan.cn/163vdethnnu.html

G. 面向对象
来源：http://www.aibaodan.cn/163rfeheibr.html

================================================================================
来源：http://www.xuanzx.com/163ibsiuphd.html

[G01] 定义类
来源：http://www.xuanzx.com/163vryuvzzs.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ilthovsd.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163yqrmzswe.html

JS:   class User {}
来源：http://www.sxryk.cn/163olpijxkc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hamnirut.html

Java: class User {}
来源：http://www.aibaodan.cn/163vwhxongw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163eqxzhooa.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163usvpxrxn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163shvgaoyl.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tjjfqxee.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rrnbguwa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ghgtlelq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rbyxlruh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163dvfqtssu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163shlgzhju.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163hutkhdmv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ukzcadjk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yjmpjkue.html

[G03] 实例属性
来源：http://www.xuanzx.com/163twrvnqwf.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163dvogsgvt.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ejubqlrp.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zjpzixvv.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163sqwusgdv.html

Java: private String name;
来源：http://www.aibaodan.cn/163bpkioklk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tsqizeuj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163xxqiiofq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dpttfrhm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ojzxnhss.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qaydceeh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uxdoqmiu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163zgxijtjg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163cvjshwjv.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163esexsulc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kitnleic.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163unumswbu.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163puqcispa.html

[G05] 继承
来源：http://www.aibaodan.cn/163rvdukgwx.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hqmortsm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163debymvay.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ihjcrsuu.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cgbxyxva.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163apvcmqju.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163gytuidpu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163sjcikxbx.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ijkvavce.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163iqzmogdd.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163dzircvoy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163flssbgfw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163sgalymgx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hmbhfcfy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163agvcynek.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xxvkecma.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163emvxstab.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jxwrasex.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uqnpyelo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ricpzkmf.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163gzfjolbp.html


<!-- 参考信息 -->