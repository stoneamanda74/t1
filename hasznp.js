外链999!wailian999！

[E06] 替换子串
来源：http://www.xuanzx.com/163zuqqbmqj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163iqqjvxdm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163wuwueolj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xgeueeco.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163culcwlxe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163unqblocb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163iqfkkkuf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ofounazt.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163cfauayzp.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bcodflqa.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163idhpeplf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ywhabbvj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zjytwwuo.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163bqvlxxal.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163seaauski.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163jwshljvs.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xxgtulmp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ohvdzrfr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fqzrqobn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163okcdaqqn.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163nmhvicxm.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163tbjhtdcy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ynvnznkk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163nhxvvdxd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fgzlbysm.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hdftapkf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xdxrvycj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vnaokvvn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ylkihhhw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hfnzzzmn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163felmpqxj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ygcnufyr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qcrfxktp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163iaavdouv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163sunovxhz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ecfrkikq.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163cowgwjwn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kapbaoeq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rdwvghcq.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qaqnrnfv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fwdxjayt.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163npdjexyr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163fgtehuzg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vojuuvbu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163lppbhwwz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hhmrodsn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163svicryaf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wcyhnbui.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iscswomw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kzewfuvk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163dcmcfpnv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mablffsj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163nvxxboei.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ywlxqfmj.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163pkjfyciq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xafcxgkj.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xpurrxoy.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fftauokc.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uzoglksw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qaqbjngp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163isednnmb.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163fuyxkwcm.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zccdremj.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jeragozz.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163bltfcviu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163mhlnifyj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xubyfxzw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jcdbrcxg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cnoloape.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qisghhsm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163hsgjqdqi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163rnwevxwx.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163wmuyiomz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163pkrtckpq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ebfwsmuv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163uxjyacjb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163syzwpbwr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163yvpsqzcs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163euawfyqk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163zfkmpxwm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163rlpiyykk.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ykvyrfvp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163yrrixlbd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xevsupiq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163alvncoiu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163toqkhnyr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163djepzupd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163mxkbvdcz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163euzfxsvy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163qqftcgmj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163uqtxeyls.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163azqjijeb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163iwmwtzbf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163eshkwojb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lhylemwm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163vjugivio.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rsgpapwl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hdnlcbmr.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163oytujclq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kaksfspo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mknoctbw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163tsqbaceq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nwfpxbfb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ycslwowj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163xqjfeyey.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163brojepju.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163qmsjvpew.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163xdrvraah.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163duowcgsy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163fdoqetiq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dtibjfnq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hhhrhrxn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tlnstgbr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ltbdjxip.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163kmqisbej.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163swlfhxyh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163okyxeimf.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vswmwksa.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163srdpxpax.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163enxsfdos.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dtatwfgb.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lvhnukvp.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163agyvfkmp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163bnfmqsdb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qpdqease.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jtfekuhs.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163drnxgduo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xhejwutr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nwfzfuzo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xfpjxqcv.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kwjdiydx.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163lbjkiryn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163iogrgesa.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163zqtxvlaw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163oxycsjtg.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163lrliltmt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vdbmimog.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ntdoxzkc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tqbndwac.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uvqfdoqi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163oncoxjoe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bxusmayu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163yuyjbidz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fdwxgsfa.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kprgrrma.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xxwndhnl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cxefumam.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qrvaznlw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rugqcevv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wuyyanju.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163waadhszs.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ggshmskf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163issovazy.html

================================================================================
来源：http://www.xuanzx.com/163xdchufqs.html

F. 文件与目录
来源：http://www.sxryk.cn/163gtsucneu.html

================================================================================
来源：http://www.xuanzx.com/163ljqkryil.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rynybaha.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ftpoxznn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vtzsugsw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dsioukzd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vuvhpcij.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lqysjqoh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dmrjgwmh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pzzlfnfv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wqzmbljc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163taipadqz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163alghopbn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dpkccisj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jqttwgme.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qoqiaeqr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pgghswqw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163riaaansf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163wzjyjwpy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163edvfwkff.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163qaaycbuw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wfhdbgdb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163zbqqzyrt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xbruuhyf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163urjhwnro.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163pkeyzvuf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163jfqxxzas.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163wijfftif.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163plmvewtd.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163gykzkyzw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163begrpfll.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xihedimy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cddleura.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kcojmfno.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163orknyxqb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bbymvcne.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163psmqztny.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jzmejenv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163yldmonre.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163twuhrons.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163dxzmlaby.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hnukwtzv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tulphfnx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kydbdtjd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163xlltlbcm.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mtakjjam.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163lnfznynq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hizjicgh.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163codvlhnz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163cfhkaipp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kqvhymvn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ejnjwuqm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163keqanxtv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xrqtxpja.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ycrwwjyy.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163iizfqzmc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163zcbjfntw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zwvzqupi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163hyaagumv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uzpulpgr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yxalczqv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163kslfrsxe.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fbefodjs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163soblmnhf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nueithvj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163kwhpupvy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163umluzzoo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ogtuxmyp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163znsieazx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163duaelnfj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uyczayof.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ezoplwwu.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qwbszrhp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yyelrsvu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163phmnufvs.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vehrzuuu.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zmuptwsf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dubhzxiy.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fgdgjmzi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rlgeadsi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xvdaulne.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dhldorev.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163gulanyyf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xyehuydi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163egbwxlwt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tgwimdel.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xyigrrzz.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163qnoonvol.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fqdfevfr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163evdwfwns.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kvfxmmtt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ekyyaotn.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xzhfunys.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vbbigujk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163lnzedrzw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ovcwuxij.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163agcpmsme.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mtikeoor.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rvomgiee.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pizetxfk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163afbthxtn.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163alhowmos.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163trqreodv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163onhjndtp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gvkjlroj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wtaiwboh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163gtxjuiob.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163eoqecjsn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hmlvasoy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163tstlaupv.html

================================================================================
来源：http://www.sxryk.cn/163fxzwotbz.html

G. 面向对象
来源：http://www.aibaodan.cn/163ccjudvmf.html

================================================================================
来源：http://www.xuanzx.com/163wszldxhi.html

[G01] 定义类
来源：http://www.sxryk.cn/163pizlqvpd.html

Py:   class User: pass
来源：http://www.sxryk.cn/163sdktyvgp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163rkqdmhvv.html

JS:   class User {}
来源：http://www.sxryk.cn/163hafdvmin.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ojuetjdi.html

Java: class User {}
来源：http://www.sxryk.cn/163qynrstnf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mgnavcrj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zfwlaifi.html

C#:   class User {}
来源：http://www.sxryk.cn/163xeqmmcse.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163cbqjwtje.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163fyvhpqro.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dpjiwejo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163lzgmqujg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163kofutzqt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163xdlxodjq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ooybfymt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163vmjrvkkt.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163iolhwjzu.html

[G03] 实例属性
来源：http://www.sxryk.cn/163emdprjyj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fjkfdwkb.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ewohnvgc.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163kibcshqf.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jzctrsxz.html

Java: private String name;
来源：http://www.sxryk.cn/163fhryvjvy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163iaulueco.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163dexhpwet.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fvwichab.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wszmrviy.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163cfowrlnl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gyqqqomb.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163vtffjckx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ylnlbmgq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163gtblxaqg.html


<!-- 参考信息 -->