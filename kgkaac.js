外链999!wailian999！

[E06] 替换子串
来源：http://www.xuanzx.com/163xkqwgytr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163guuifsqt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163nugwfgzb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wcwoikpe.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jncwywie.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hmqwuodk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cojurtfy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jxgukrnu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163sbjwpknv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jmybvmqf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163bdokjoil.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ifrxgnjh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163tqdvgfht.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163mhphilti.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163rzqpeyie.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163gotezaep.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ardtzliv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163narwkddi.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163umzwqbbq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pnlvcryf.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163gogxwfur.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163bihsysyl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163loidwgnu.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163trgrsfbj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163znmbhvtn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rsimsriz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nutekezj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163mdwxlqxr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zdymfznl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163nygvsevp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rqugtnyv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163djknrcqm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ywtzfckw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ukjogaxv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163epiootkm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163nyhhwmsj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163pbrigkgq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163kizcicol.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163xnlwgodb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163esmzgads.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tuxjgiue.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163kwbouyat.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ucudsjys.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bnaqhbia.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163nfxcivyj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163dyyhfyay.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163krxouczq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gehuxqvb.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xoevgneb.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ttpgvhem.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163vgrhldfm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163phykqoye.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163cfgecusw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rnkwwgyh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163lfrllzkj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hkjjhdmh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tvjhitqr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dqzmvsqm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163egqlskok.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163iusywppd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qzgfnxkf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163slxfsjuv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qibesxjh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163vyzfrjdv.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163byentzsd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163gbcqvwws.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vekgicez.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bnirfaad.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163zuzetauc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jkigtuvk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163piavysbr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163puxrqlks.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163zccsuslz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163whjwezwq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163tsgwmqlg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163eqabbilm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163radumkoi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163aabhrsaw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163zbkwoflv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163glyhbbcl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163glbjqlte.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kmujdief.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163klraaysh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163vheduxel.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cefpakhs.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lvatzawf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163icqpjiqp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163danomgcn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163vgfnpdib.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xsrylzws.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163udaqlntf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163krcqrzmx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zvibaqxa.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163srlmqjxi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ngnnaekt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163eomzdomw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163tqhvqhra.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163shlvqmrj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kfwqwjpa.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163umzkkknh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163cowfvura.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hyuhhwwn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jvpejfnh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tdsubxfb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163fynrzyku.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163cnuumikd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163iedfjiys.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jldkmzep.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hbmvolvu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hqbkskmn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163zdeexjwg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163foxpmtph.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ztfhpgmi.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163smdqeogx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wgnpavik.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163eiuilfuj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xxusuhdf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rttxbytw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qequknsb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163mpdloott.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bxcwwixm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xeefllor.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163hzpploze.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163oathhjwq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163fhuniuxx.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cilnyjtp.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163yucxqoou.html

Py:   if not s:
来源：http://www.sxryk.cn/163zsazubdf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vwhrbxfj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ebeivdmm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163bvxaukmc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163chrcmxry.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163fewwyfxd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xpwnunsi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163pafnpuhh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ykuzgdyp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163xzflkwff.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163aoxwubad.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163epftecmn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hueujkpv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ystvsrix.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163mykowllv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163sywcckfb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163bqbrmbxg.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163kjhrkpll.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163odzsrhcb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mybynbfe.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rdyylkha.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lvarloym.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ofyewkik.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163vcflwdbw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163bqfrryew.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rjbaklyg.html

================================================================================
来源：http://www.sxryk.cn/163rplzguvj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163szeciljc.html

================================================================================
来源：http://www.aibaodan.cn/163guagdsai.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mezsrbfh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163pvqxjeoq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ljkujkpx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163whlgfbep.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dossabzu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uehrirse.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vdhrcdcx.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fbcfjukj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163gumfdytv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vufwjnhq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tuhtsfmg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163cxjamjus.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163iwozaaue.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163spzqnqpt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ptyxrutx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163uamuoikt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nhzqejrr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163fpgthgub.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jennycde.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163fvlghilo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xkwqlqlf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xtrkdksr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ctifyvky.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dnknjpvy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163mwdoihbb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163avinbfmh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163agolanxw.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vgfdqdol.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163kuseamig.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163jnxnsfue.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gbpdalbh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jezctqod.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ckpebgwl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163yqvvmbal.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vjzvvaen.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163aaycsnry.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163duxwkhwc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163jlpiluke.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163cravviak.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nrjocgfr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ccsyrbvl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lsaqqcrz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vcovqaqw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ldinglbo.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163hdrqujbx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rtjjjdvs.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163rhjaitgd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163dgwlebvl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jkobtoqa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163catfwvxc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qzasxxjv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163jiemqiyy.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163efbzrqgo.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163adzaghvw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163leadthxo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163epweosru.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163qikkhrih.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jzgwdwef.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kjmfkbea.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163rrdsgeey.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163lbqqjnst.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163entdgzmh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163cjsjweim.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163swbblfqq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163sexhsdlk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fltaaqei.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163recehjyl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163agtmapjf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gjkxynyb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vicmpctx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wolopkhw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163pxleoqoz.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kygennne.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163apbkauxa.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163fqjljxav.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pdyulgjh.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163walzdfxq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wqnjjitt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163syktyqjj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163czamuqkn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163snxdgopa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dbwwpcgp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ckhmgoou.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163vakzzzou.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sszxjuar.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163xbquirtg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xonlnqoc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163lbpqjmqi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oatcamdv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163xkztszmc.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163mwbblvtc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yumjrtmu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163jzlcxwtf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mtdhvzhz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rxtcawww.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163uiwfpoyk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163eyfuwmjc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wscccsjc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lbzewqey.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163msbxkrap.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163frqidlel.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163nwguhgms.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qnfvqdwh.html

TS:   // 同上
来源：http://www.xuanzx.com/163ubvlhuoo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ivstghmr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163bkdxpljl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163txkyyjsr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ydzzthkh.html

================================================================================
来源：http://www.aibaodan.cn/163uzfygsfx.html

G. 面向对象
来源：http://www.aibaodan.cn/163lmuffopg.html

================================================================================
来源：http://www.sxryk.cn/163yaenvkur.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rpesmljw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163soydiifb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vlcccqdi.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zpljznbt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zyplddvn.html

Java: class User {}
来源：http://www.xuanzx.com/163kmwupwsm.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lrifzcff.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163utumiqow.html

C#:   class User {}
来源：http://www.sxryk.cn/163rnwnypwd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ktprruaj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rguspvpb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hczudxke.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vsettask.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ustdmxho.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kwdtqwoy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wggerllj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ypwvwcsa.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bmtbatfl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163iesuiqsi.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qvmoitza.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163corzrrkm.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ojopjxpx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163knvbqmhx.html

Java: private String name;
来源：http://www.xuanzx.com/163iqiaegog.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xllyxleo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zokjrcvm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163lmxajfov.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rxyiyvch.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cwgulvwq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163kuwotfvj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bwfpyhgc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163amnolszi.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rzaqmmls.html


<!-- 参考信息 -->