外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gztrimmr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163tbxrpxud.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gpmzhmdt.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ncmedaqu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163joiiriqq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tknlpnai.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163acuzsron.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163serwoxhb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163cupbpyvx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163crnbcqac.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rvhhkacc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pwjggssz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ikjqrwmb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ioubjbvk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hzjxxfws.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163uomrucmz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163lhuccolm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163xtbfseil.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gjaqiwaw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163csofdeyg.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gdprfarj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yvvabztv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163noksvlwr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mbkljftf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xfaindip.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dzolevkj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163avuewour.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163lswkcmes.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bpyxpeyo.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ekqkbdyp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ljplndtk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163avnlumky.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kpuxvbkk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rlrxcxcq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163yebrqzrd.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163wtchysrb.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hfowftry.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xldqvsos.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rbzlrury.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ybvxkjal.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163jffaizqj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163vvcoekpd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163grmzwdxu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163fybrxnmh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rsujjkhj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rqhsibqo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163remozaho.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lokpwfer.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163uehyhtrl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163wozktxws.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ydltmqvg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163joysixlu.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vaisixlq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rvouasyt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163raovegci.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163tnhyunja.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163tpimpqbd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163atptuazd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163xownsdcd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163trkcprsm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cmunnrtk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fbmsaauh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163lmoasvfh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163umyxweek.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hxgwyuyj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163slqfcgjb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jxvzgonj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ngbkdezh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ftkhomnv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163zscskayi.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163dkgypwka.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163pwuzfmdn.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163urbxudwm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qxfxbouh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163txargvkx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163snjccfae.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163voxjwavw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jejalvat.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163nheyffcw.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163xibhgwis.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163wenihika.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zkbqzysf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pstwqkoc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jxgltwtt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163kshsegtu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163zrnifese.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163mbzclzzx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kidjxzqd.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163coaaqjra.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163zfilbryc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163qahakeqt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163iuljpgee.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yiswaiuk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163sufnsnqv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163rmzghcdn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163pprnqfho.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163huinzjpv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163qiiupigv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qgqntzoq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qxkuskzg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163emwumhul.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163oksqdsyf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163bidpqior.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163oncyzoyx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wsalswhs.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163oerhxvoi.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qvyjqjew.html

Py:   if not s:
来源：http://www.sxryk.cn/163gxhzyaop.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163fccdsqjb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rmlojwxl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163fedetdxm.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qwwmuvtk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163wyhcvyca.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163shpynuhj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jdnlpebq.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gcxypqtl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163yhzqtutl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ritfibar.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ewalhvfu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bgrunhra.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pzuhfaiy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tshtzkzk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hjscscej.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dekgcosy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163zomjpodi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163hrarqnqf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cwdjxoqn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rtrfodfb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ciewutgq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xxyjwoxw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163rgafogps.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gsckmmwy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rqgurjiw.html

================================================================================
来源：http://www.xuanzx.com/163wyifiioh.html

F. 文件与目录
来源：http://www.xuanzx.com/163dywqwszs.html

================================================================================
来源：http://www.aibaodan.cn/163kqtvmjvy.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163azodlpdu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nvmnijzx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fmvrheaz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163symnfkwz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yhkmeucb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jmsxmtgm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163uumjajqu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jmqaabzw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163vwtxijfw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hlxipsea.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163fveqgrfs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gmaaoagx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zlagwsho.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qqtelcbz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bbycmhpn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163htxmxhbs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163mjdaitqf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jhqnxojk.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163yxgldbsg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vzdzskrb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163kbansvva.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rmlqofpw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163smbnmruj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163atvskgyq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ayadnlkw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rjwfmjed.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163velrlvli.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cfxfwmjb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163bzleqxhn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hytajpea.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wbbfnxmr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ogyuerea.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pukfngkw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qgrdmnmw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163abnhtvav.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xhpowfgo.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ukjynkoq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163srzaxzbh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dslovfaw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ffrcmoeb.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hvzszaad.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eydlytkj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vxhzpzsy.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zboziukz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tezvqwvt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bhisuith.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163wxxbszsn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kmaicgzd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mktqklmz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163aosjvnne.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ejelnzsk.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163safyaiji.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gctjiurs.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xhmlxcod.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gxqxbigx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163xvqwnvun.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163sueomjsl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ajekucjf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163enozxokw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hznjbnls.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163blmjilnp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163hivgtuuu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163meyrbdll.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163hdamgnub.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ldpimgxc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163mvvcxdzc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kdkazkfh.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163imqhstcr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vugkfxwg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lctmfjgx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gnqqbkvs.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163frigkbam.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163njlvchlx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lrjguybe.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163hyqoisxy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lknzmxua.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mvyczjgm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fvimalat.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163viyhupdh.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jlodnhep.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163agifqbpl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qafmddzh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sgxljuty.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163koaibrxu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163emuqvdlb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lpfynffn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jqbkijkc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163obavihzt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hudrdfmm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163byafsris.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zkewbvjo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gywymxah.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163nyfjpmog.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kkrzsufr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163azrdmckz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hsuvhzqi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ebmfobke.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dggamxhs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ldgxxije.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163whjftzuc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rpcfndrl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fgiovkph.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163gxroawum.html

TS:   // 同上
来源：http://www.sxryk.cn/163drpdsrio.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163yptunpsm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163anfkptof.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163kzvgebup.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hypehiwl.html

================================================================================
来源：http://www.xuanzx.com/163obbmfxgv.html

G. 面向对象
来源：http://www.aibaodan.cn/163gpdorygj.html

================================================================================
来源：http://www.xuanzx.com/163uygskzxu.html

[G01] 定义类
来源：http://www.xuanzx.com/163gsinoyxi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wbhoimis.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ihvpljpt.html

JS:   class User {}
来源：http://www.xuanzx.com/163xsjrugvz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163cvmvdaep.html

Java: class User {}
来源：http://www.aibaodan.cn/163pybizdry.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163oqpikohh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163lffvyicw.html

C#:   class User {}
来源：http://www.sxryk.cn/163oyixyqeb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163kopezoap.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fugxpnlh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ccvqlalk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163dgwtrypi.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pzspennb.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ildiqjsg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zaxsjbhn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ppelcqeu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ggwqvmrz.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163nyeonjna.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163tfooxyje.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163lnqipzif.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mbdfsowp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rpxkutla.html

Java: private String name;
来源：http://www.sxryk.cn/163fcioenyq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xodotwzj.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gbqgjshm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163nlqjjeqe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163setisgey.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163txiihmsv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bsqxkcfc.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hhngubxz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163rhfzjlum.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163kyzpcjxf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163dytwjxvx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fsrhaboy.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nnxrspci.html

[G05] 继承
来源：http://www.xuanzx.com/163fynljhjp.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kbmpejrz.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163oplfmmoz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lpybhewq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xnoooare.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vicblyjz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rgwjrylm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jmspzhdx.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163sxzpehub.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163dhimydnc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wjrhbwwc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rrgnyyzy.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hbntiqgh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zsbaeyim.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vrpjkjjo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163agzkjxxv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163luxzwlab.html


<!-- 参考信息 -->