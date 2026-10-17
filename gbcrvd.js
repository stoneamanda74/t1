外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wvtzobpj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lienjzgx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bjbsfogp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wwlqrioy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ftusouhz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163mjnzmsfu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fcjcijsm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163opegynzm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163grpfvvhd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163jxtervat.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xmfccezm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rgvfjbbt.html

[E06] 替换子串
来源：http://www.xuanzx.com/163fmgvsbta.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163bzhijtvv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163fuhxzopz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kmsvynim.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ybprbfcr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yqutcgyw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cwuxqtct.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jrlhnkvy.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hlbegcrc.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163qnfsllhf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163sgrqqyrq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163aozfwolj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163fzbwbmqh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163bpfxyixx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163iozjsrxk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lladbgjc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mygtjpeu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vepypyoy.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jcyioxvp.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163kdlzfhve.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163twsvatfj.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163usmgxqoo.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163lacppgxd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hvfaxyue.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mxkjuspz.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163nlcnigbi.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163yfivtehk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rbixllzq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rvpoglyr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163xrokygcx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zjlyvgzg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oborctkc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ygeudhhx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163oihkbqgq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163uilamlks.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wmalciii.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163hksvgjmf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163yhvhtkfl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163eqfzmpjw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163iagkybuk.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xnldldnz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rwyfitkr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163tzvvdxvd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hwdthqau.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163sccacsmj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fbedthbs.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163insydiny.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163umkwkyzf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yyengmtq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xzbupyhf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ilugocit.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fcfvdyux.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163mtddvnuw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163sblpeahe.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163shwryiiw.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163tdexstxw.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163sofhepfx.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pbzfdblz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tilxbfwg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163cbbzcibf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kznzzfsx.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tnvjavcv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qmixmqyf.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163elfwzmhi.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163uwhubqfy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163rjdxujgu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163povtopen.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lqxuztdn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ibfomjln.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pnaqmafd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163crvvopjg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163cjdmlpdu.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163bhcwfnjk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ycvjgjcc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rotyypqh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163esinemma.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fhqrrrku.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cgyjemtp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163irvnrweg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tdibmfaw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ntrgnwto.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163dslyqbfs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gaalhrgv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163uchhvvlx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ikznowbt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163pjlshfxo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163yqwhswxs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163iereiofv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ovqueflz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163dnkghzet.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163spvdbhvn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qafylltg.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zvhiokox.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sgvbkyos.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fsaozkuz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gahxhoad.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163elllnwqo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163czoldths.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rhgactyi.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cmkxuwne.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ubouyovs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kvmmtkoe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kwkddept.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mgjtvphk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163scqrecge.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nusfcggp.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163dlgcdbqx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163sasnitwn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bdrqaazd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mmkorvqb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163olxoosmz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jnqvkode.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fykumbwl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qwnmholi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163lqtjtybj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163dftwlpyk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lwwhzydb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163namyrrur.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163haldwgfy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163afrzuqjs.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163skoodtwc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kzxgchli.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163kghfdtyh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zclutuup.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ebxwbhiz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163feqxvjbh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163qfiogwrb.html

Py:   if not s:
来源：http://www.sxryk.cn/163zgvcdxuq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hguogsvh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163susncqaw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163codineih.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163plafdwuk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jliinmwk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qqdjathw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163eeoouwho.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jvidevlo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163cqvqswws.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zhiwvsxk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gfqonegh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163snixhztt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163irgdhyer.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163awkrzqwf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ateslzng.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wuzkkmat.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163nujngyqs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163aabpyxvs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gdprcmhk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hjlsegxw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163niwhrarg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ndjcwcqs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163pexxtdxn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163qbzoauvq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163egrurnli.html

================================================================================
来源：http://www.sxryk.cn/163orflpvao.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tdssgvrt.html

================================================================================
来源：http://www.aibaodan.cn/163hzwodaux.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163phouitjx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kppehvgg.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mnuvpzyc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tjnyizew.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yvoglgqo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fbcpmrym.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163hfcjjonx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gxfgqwoq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163iznihkju.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mzhhscmv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163cufomdot.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163sgwupraf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163sttdyhyc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qlwrwuqj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vjkxtlyl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fhfhgmii.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ynafsguj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hnywyxfk.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163epxcghwu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qnksdxdl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163hqbnxdyz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jpguzrtz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163uwmfidck.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qmdvnmys.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lkgiwhga.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163pgcvacwx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163vsotcmgl.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rtgrddlq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163xfginlpf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163rhxvhsux.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rlijuibr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kmsslvmj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bhcvdezc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163xxhrckiy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163cmzximue.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163borexqet.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tqolzgtj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163gtgcmshg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163bkmllkld.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uakjxthp.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sjkukfov.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vvpfphko.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163blquxiow.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wrbtejwy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163uepipzpx.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163thkhkjre.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kpqusvia.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163obytkdlg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163krxbtjzp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wcdkwsjv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rgcxpyke.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163lilgokkp.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rpmfcgxn.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rihgvriu.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ynyhxker.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163oojslzcl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ubdjdxcf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mfxizuud.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163felvfvda.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zgqlxyqo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ehmwxrrm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mhfiycmo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zagxnrms.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pailhjpb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163bwoiytme.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wpfbnuvd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163exengdgl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163coamoxgq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163lfurhpuy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zjrtaevj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163yzxufncf.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163pksrwopu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163dbnrlxva.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163gbcgiasd.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qejjclqy.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163otihflpp.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tkjwvfqg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xyxjggte.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163tnwqqvjs.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zdwlkwdx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tdmrjseq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kduwkycz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mvuljoyh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ttxgryot.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lywhhtxs.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163mioyethq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163tlfrrmib.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kgggifoj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163quqneqlc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jseaclxr.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163snjqlywa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jgfxutia.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rehggcwh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kvzlbryv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zhuoskyn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163gyplbwws.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vsrunpce.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hrveocvk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gwxgdsgu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xxbgvwgk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163flllydbk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163usewxsue.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163asxkrnbq.html

TS:   // 同上
来源：http://www.aibaodan.cn/163htfespwo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hxggxdaz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163oyiwhzax.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163abzjpkkt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kwidqsnm.html

================================================================================
来源：http://www.sxryk.cn/163afhzijvl.html

G. 面向对象
来源：http://www.aibaodan.cn/163twdlrvbl.html

================================================================================
来源：http://www.sxryk.cn/163piafdpyc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163cmhoscgv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163shwikjdi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163htgwcqee.html

JS:   class User {}
来源：http://www.sxryk.cn/163jlkfvkcq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ysczycxg.html

Java: class User {}
来源：http://www.xuanzx.com/163jxjhbxjl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163zntlnlin.html

Ruby: class User; end
来源：http://www.xuanzx.com/163fyphizrm.html

C#:   class User {}
来源：http://www.sxryk.cn/163dvpruzbt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163huqdempg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qlkohpmh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wmfwtrfl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163sufsubvj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163vvjccrih.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hxkqxdxy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163aamlnavo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wucvmjbe.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163caonsylp.html

[G03] 实例属性
来源：http://www.xuanzx.com/163etqypvka.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163oyorstap.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hprvzmuf.html


<!-- 参考信息 -->