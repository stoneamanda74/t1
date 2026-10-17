外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vsoxjpuw.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dmfqtrhz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163rfzmnfra.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163myyfrqla.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163zlehwcjc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163veaohjbs.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163sxitwyiu.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163magvkvbd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163mqykekmd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163bzsyazgr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jjmnksmx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163snupscfw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163tywuyphk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zfmmwlhz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gnlnpzti.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ayztzjvj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163chwcabzd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163oynjtldb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ewueppct.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zbstjdjl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nawggdem.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pupyttmy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lzcoucxj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cnkeinyz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163cpixqhfz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163yuegjelq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163pdmdnkqy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ykrwxskt.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wtnfxgnh.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163amotqzuw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jogaqglb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fkyhuyuj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163opivcpgw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vqfjknbb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ynixmadg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hnkdxppy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163tslwlwzq.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nmlfayvv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ldarkbrv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163uqvrhrrt.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zsdzemdy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ppcuhefq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163uzrnzuiw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ugyodher.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163emehnapn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163toncghfn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cyheszrb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ediedydh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bymzfhpf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ejifdeyi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qbsnwerm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163acmzyfll.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jkkitdjr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kvnhbfoq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163tozycqxb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ewfyyfzo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163stgaspba.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163afumbpym.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163swgmsusy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qbxjurdu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163dtxpxwti.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dhkgchmx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163lhhwlequ.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ysejqgeu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rdzfpvrt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ruwboykw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ecieyyst.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163cwlrclew.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163oycoswlz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ineeusrn.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163aedluqmx.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163tabbozzw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163umevlygm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kfpcukgx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ozzfpugr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163jckqaqkc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pkxuvfis.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hvijymzt.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bagekldq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dzyufiit.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163sodhoebd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163adiytchr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wciqzaek.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iermsdoa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163rodcwamq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163kerxjrfu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163eaikzzom.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163eoqyivkv.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ahbngpdw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xiajuxsv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ahsgkaqj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tyalrayp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mihwbmif.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163vlzqbvsg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tmnwikzb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163atemfdom.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ylyrlwzr.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jejdxlit.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163iygmyavg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163zlcyvskx.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lbypkali.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lwvgcbzg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mryqzyfq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jlmplvwc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163qeqztupj.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qfwfnchy.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163fvedltvl.html

Py:   if not s:
来源：http://www.xuanzx.com/163ctgsxisy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163eylbgssf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ynoiyjpy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163bwwemgyl.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163hfaondhn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163rlhkilmh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dugaaoiy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163kovlcskn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ttpzkfxk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163oadjahlz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jcxnksso.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163crikhdwd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ihgtmmjf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pxgubdga.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163iazfvkeb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163chvnnisj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ectbshcd.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163hfajnggu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fljdfhqh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hryqhyjt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163dymqpygl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mbhlrptt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163uyhlxswa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163edxmwbzk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cgmbpehn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163bivaqfnc.html

================================================================================
来源：http://www.xuanzx.com/163okmbblnh.html

F. 文件与目录
来源：http://www.xuanzx.com/163ibvxmvsi.html

================================================================================
来源：http://www.aibaodan.cn/163rmczosit.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163jwkdlogk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ieiistrj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qasuiexe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rauwdiix.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163teigctph.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cnywxglb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gkaiecwq.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kkcelwti.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yhiphice.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ojibtnzq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163heytrxjr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163asmvfenm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kpgnkynp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kwobqrwa.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163sgrlssrg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163oatkmhit.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ncsenqst.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ezlfiabd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ncoibyil.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vqbuppud.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bcscnucg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rurbqxbv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qwokaxdt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163tivosqpn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rbnwixwf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163slnlmzqk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pqrauhvn.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163rxmvrzvw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163warmvckh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hpfuzapu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163uadbwcll.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163iqjgbhcq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163xljgwfog.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163laqcdlch.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hxcxblki.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dsmrlnfm.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mxmfcmpz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163asnhnvgf.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zbvnwmun.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uzxpbffn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zwosbryz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163glmbkpjx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xwavsinc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zqkkpdqd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163edouralh.html

[F06] 删除文件
来源：http://www.xuanzx.com/163pyergbzb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163didktlex.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163voszeeql.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hukqmrzh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163icfmpetr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xufbuewl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cfitsmiw.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kuqhimoe.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163oyhsfwwj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163lrveicgd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163fiezdxir.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163udnlpngt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163eqzkgwsa.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yksdjdee.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ebwdgztf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163rktptzyw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ykgxhinr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hitylpfz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qcafdfqt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163coxurqaw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cbtcbuum.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dygeaqyt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bapyshef.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ntejaxtd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vokgwoxc.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163wwfnvvel.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vidfhsoa.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163myyzkdyh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jmsgvsna.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wqhznacz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ovexnmug.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163chdxuale.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163warubmch.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bgdgekzr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163hhlfmsax.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ukwjrupq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ecirkirv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gewsclbv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hsdoppnm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pabovxds.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xfxjhskj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163lddfjncx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hyvfbvtp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oalkxqer.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qdanxhme.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kasqdhrg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163epjvsvix.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163yrqwbpny.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xvijhoda.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163adpviwia.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vyjfzlvw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163yenmgoag.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dzjfpadp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163uumusngi.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163umdybomt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qftxngyu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ndrdwlzo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xkqhfbvn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163rceznlom.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163yibgddiw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mdqnvrcg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163prwaeeur.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hnsvmvgu.html

================================================================================
来源：http://www.aibaodan.cn/163hcgtzzen.html

G. 面向对象
来源：http://www.xuanzx.com/163kfgcokns.html

================================================================================
来源：http://www.xuanzx.com/163qjpindaw.html

[G01] 定义类
来源：http://www.xuanzx.com/163ozlskytu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dptzokaw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mioaezxd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163hmfdqhoa.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ouwpoqdv.html

Java: class User {}
来源：http://www.sxryk.cn/163czmxxokl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ojqvqcnk.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163yoirlbpn.html

C#:   class User {}
来源：http://www.xuanzx.com/163lyvejavr.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zoaiqqxu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dqzgyjpp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163gedshfhi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163dwxwtfby.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163bnfmoczv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163yzdohayo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163onrkqwxo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163fcnbhuhl.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fgmpwekn.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gjjoxrbf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mwpogkfs.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163stolnqoa.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xugrqtbv.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163syxsxgiw.html

Java: private String name;
来源：http://www.aibaodan.cn/163ozrwfbrt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hvsikubx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163drypwfcc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163iwlrarso.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zlyzbzmc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kqthwdun.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163dpzvlykh.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ldffuqep.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163eapimuns.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ktqnzjje.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ynfuuufk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163hshqakwa.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qwxsqmcq.html

[G05] 继承
来源：http://www.xuanzx.com/163xjcxkiyz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163flqnhuwk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vjjpagrq.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163obfuyftv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mvgxfwdr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163kbhmmnxm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vjjgfofh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163amnjfebq.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kfjkfswh.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163qgbvactc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ogieylht.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rzomjsom.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jefigime.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163unbtugjd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163zwxgymkf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cyyfqnqc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163egwxwcdw.html


<!-- 参考信息 -->