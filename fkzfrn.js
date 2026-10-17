外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163kzlluitf.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tlzbanah.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jqeigbzm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163zevemhwe.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kpqzbwrc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163cryopims.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nmfmtvmy.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163piaptomi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bvbryxle.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163bhubleqe.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hkqtgezv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163jrlcrvnv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163vyckzdqm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hpeahlov.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tsymwayt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tggeuntj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yeilxjaw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163xlzrujtb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jnsrztmw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163igvajppe.html

[E06] 替换子串
来源：http://www.sxryk.cn/163zwqhjzzs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163bpigpeix.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rtzorlly.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lrbjbetl.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eqobifye.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vnbgpvkm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163gczfjxmg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163evzwdlot.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163jttegwjv.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xhicmidh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ultidiid.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163xhdbykyb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wihnooqf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163kfopfhhr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163udrsdoxf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hphoqyqd.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ckuxgyxk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pefcdoer.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dilnokhi.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163httcaaop.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163jtfeargr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163gqbxadjg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wiadkxkm.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163nedjbavp.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163owocdvmq.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163sqbtarrl.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hhzzodqs.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163qmbmwnsb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163czbpdzqt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163evtohzvz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pukfrakv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tdncvtfh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163gxjvktii.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ggjexuyr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163yvpolfwn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163plswwezo.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163kdhzntdm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163stnsinsl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163etdihuvn.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163opumhvql.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jfimgptk.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zzleyvvh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vzeuwtcc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163eznlgbdc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wsojnmkm.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163sraezfkm.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ikwqukem.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163yojxbgvy.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zrkvgyft.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163olrjcdkm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qwohkjrf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163zdjgkyir.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163mrhkpxdh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ahksouea.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163iorfmqhe.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163kzfkqrhm.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163lpncplhh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cugpkocm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vdylwahh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163grgstzch.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163threytao.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163dyiupaqq.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jtgfbjys.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fvxqltyj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163czlbdwsz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ijgcloyn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hkywwxhr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ybmnuqsm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163iaebpnta.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163szatilie.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ssldwamj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163hehbgbvo.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kfjhnhcd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163zcurqjsx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163xscrqapq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jxowfafp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wycbinfp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dbtxltvl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163otqpudur.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tdnyreye.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mwuolpuh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163shpavmog.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rydoruxd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163tyhlfbyc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zxtizpiz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163brzyeytm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ixgwpxpd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wjdazvah.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qxibdkdh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rriltdjc.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163cdkjghcm.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163gjjqdyuc.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163uccoeedb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gdtxtmez.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nbdtjevz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163eqszurko.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163xhdrhyle.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163gqbvktcr.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qecwccxg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163qgnceguj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163fdegsops.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163letmixls.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pqdgpftb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jdgwemru.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163azhprchy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163asodgrdm.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163glvynmwc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tqmeabjw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163aafzcqty.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qylutyyx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nemnpjds.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163avsswynk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hpftuwqb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163gfzaeczq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163nxanwndl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163crykwijb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dlavukjs.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163btvwoxnd.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163pfqyzbnv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163fttytzok.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163oqtwebtp.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163znlobxme.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ofhrtleg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163twyqmjie.html

Ruby: s.lines
来源：http://www.xuanzx.com/163zmnljudh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cwbhyhai.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mxozlyrg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163witlzjag.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163asltclbe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lpaeozxb.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163nbafozle.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wcdiybhk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163yqhbbdsf.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dhqtseoy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163sllcpcqp.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163kjgwechw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nbnmdcwl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163shbnwpsh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qnwlgjbh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163puzqhmvg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oamuayvp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163araedzzf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163educvhgw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kkyiikhm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163eifxokhh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163mooijpkv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fcejakjl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163chrrwelu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jgzidpwo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163klhyvjeg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163hcetgijl.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163riigmagb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163iytbszcd.html

================================================================================
来源：http://www.xuanzx.com/163ieljxldz.html

F. 文件与目录
来源：http://www.aibaodan.cn/163vpkkunwa.html

================================================================================
来源：http://www.sxryk.cn/163riydhavz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gzdondng.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163uaqbhduw.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163quokpxlx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163snwlnomu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163tvktizpv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fezksxym.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163admdgvfn.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fvjztcfb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ewtcaxok.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163uvjfvdvn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163akepffdq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pzxvdpuf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fmausbzv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xcjhtfny.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hddtlppx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163eevkawpw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163dxtmanxh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163dztzdzwy.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163attaunzi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dojmslny.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163sidchrih.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163grvdqnja.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xnzlzrhm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ssxbixdb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163secstlea.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163juvjoiuz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163asmoxfcx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ajvdfbwl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163snlidjlp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ooneqymu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mesgubzk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163evhmglje.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163fexpcqfg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jrnbcvlb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163pxctxqhv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163yvpgxwrl.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163bhjuhjfy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dextpbrf.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ivnikvzv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lvgtylrf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xqttiywo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zbknbira.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rhfkktai.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163sdhzwamw.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163vfoynvmj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163oxvauupr.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xoatmrdz.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rrguoaso.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vcdbgrus.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vbtdawnx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163owppgcru.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ncyqdbyd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wvamtypl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ezgtgkah.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163btnghrra.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163hgohyrcp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163wpfartja.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jmotqodr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gyvwuwau.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mccksixv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163shrtcvcy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rwujoojl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vraadfqw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163sgmfeqco.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nmjnrzpi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hkoqcaml.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163slwksetp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mvmzhpcc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dgawfehb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mynyfzme.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163rklgpghm.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dxhpmwqz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163aixubghj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163elynswrz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163csgcegdr.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bfasxkri.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163whbizeeu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163efthypay.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xpbywoam.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163czzvkqwx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zlqhmggt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mbdsklvb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163catzmcyy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cnyzvyne.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qxhnhsgv.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ymidbhxd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163hagyglhu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163joffxgdl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163agqepprn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163uxxclkdk.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163euzttugf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kgffuijp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163scgahwxw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ioxpzxjv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bvjwiqjb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163uuabpkrx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ndwqvsvc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xwqoqcxa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zjeiestf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163idsgqhcy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qyuqzkjo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cltjqgif.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hkiteefb.html

TS:   // 同上
来源：http://www.sxryk.cn/163pnajjsob.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163nxatdrei.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163onpbpplh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163yatlugmk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mvhwmscz.html

================================================================================
来源：http://www.xuanzx.com/163aycoepjo.html

G. 面向对象
来源：http://www.aibaodan.cn/163njmmpzht.html

================================================================================
来源：http://www.sxryk.cn/163nfrznjhb.html

[G01] 定义类
来源：http://www.sxryk.cn/163bcdexqne.html

Py:   class User: pass
来源：http://www.xuanzx.com/163nfcfxzot.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hnpaxrfh.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ygpevuwi.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163nvgoqnho.html

Java: class User {}
来源：http://www.sxryk.cn/163snzyxmeo.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hiduebxl.html

Ruby: class User; end
来源：http://www.sxryk.cn/163jujpkbkn.html

C#:   class User {}
来源：http://www.xuanzx.com/163bltkuegi.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mfvtdnlv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gwcykmhz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pmerpvmo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163sfwnvxhg.html


<!-- 参考信息 -->