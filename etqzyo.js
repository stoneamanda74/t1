外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163gogtiowo.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kvwqdjlk.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163oonvvvwh.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qcfiolcf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163slmktxby.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hnznjdax.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163duikrpqr.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vcdrnciu.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wswhqapl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163afhuxxlr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163atbtllad.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bfkorrcy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tizazrgs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ajjytopx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fufjtvbr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ngdetygl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wcvdkhnc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163bgotvsjs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163izlfujxp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ispmnyln.html

[E06] 替换子串
来源：http://www.xuanzx.com/163qbglfeze.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gnkdjeby.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163mpyxwgqg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bmtwwyxl.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zydywpet.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xmtxbftk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jzgnrtfu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163yzbwcqvr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163uruunaaf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jrbxuukf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ypwlksux.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163icqroacd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bxkluxcn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ogigqzzz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163elwvldww.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163zpobptaq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ejeutnyc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163tqyjlbee.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ksoxepek.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163cbpwoips.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ilmnfxch.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163juemheey.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163lhpxujew.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163bbmenuhu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163jaqxtdys.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163pgmatcpe.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163txmzfphl.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zgrzheoc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rcopzzsx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ycvjmfxy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ovliltcn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jpcxplik.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ovlzxzwc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163uuhglesc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fkovxdli.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163imqvyjfh.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163eezfqmng.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kopofgcv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vwyuhhgi.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mcohtduy.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163llzzsdlz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wsnvgdcx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163sgidadht.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fuhvnboq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163whbznlbt.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kmmfeger.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163glwmuovt.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163olnifcnd.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cnqfhhrp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163smzyfjpe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ikedkaec.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163oifevclt.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ffukubyb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pyfnkkmp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163nvgerjea.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jvhsdapw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163zirwbqyc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jvoznewr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pntnzcjp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vfcyyiwe.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163mkagoquv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gepvlrsx.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qzfbalmq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ldlgmyec.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163bhltcmii.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gbwcgmcx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bvnsqzvw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163muezoike.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163nmzzczrn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163xdzisrrq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163lxynsqnq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ddurnsmj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163welwoazv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163xtgdbfdy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163tikdyopx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kehxxwku.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163cfssukqg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nazqqwbj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nfavvcfj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163tqhnzchy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163hnvsdmls.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163efxvaqrf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163nbtgwoav.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163soczkmuz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163dlqvotrl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ceydptrz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ssswruju.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bffbbmkz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qvirnmly.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163rznwdfha.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vjnaifdz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kicsyyof.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163lqnboyqq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mbfjkmcx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163upablhrf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163muypnuva.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163lgcxuktv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163bbiagcta.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163eaunxjtf.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163muaehlak.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163qdciwftv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163alcqbfcd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wpdvhjpz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kcttyzbx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163qjilaxgs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ooagqpya.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163mirfkxvc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pwrjlzyz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163gicbefrb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163verzsjdh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163mrvwffak.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lifrgljf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163kvtzjlpl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163siwmpcxh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bwpthjji.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163vyrqkfge.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163iksglsdu.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163sviepdwq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163tayppobj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ptkbuvou.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rmtgkkej.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163usmthdss.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jaluogfr.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yqoawhkx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nyfclqxo.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hmlmjhpw.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xbunwgon.html

Py:   if not s:
来源：http://www.sxryk.cn/163goezbika.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zcdlrewz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163aquwuvrl.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hnbrvhrh.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qhvjvotp.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163dzowlbxs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163unpjyvkr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pbcxaesw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163npjogbcd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ojqvsgsn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ruhdeeaa.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fsskzsoo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ixwmudce.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163llzfofre.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bjtdeghk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163yotwrkkl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163gixpihva.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jgxyxssu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rndfbbnh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eidfvbpu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163seluwoir.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jnpuyrac.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jsthgsvb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163riysvzcq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163nkrsemxn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xgyhqipm.html

================================================================================
来源：http://www.xuanzx.com/163wzkjmagl.html

F. 文件与目录
来源：http://www.sxryk.cn/163zopysjji.html

================================================================================
来源：http://www.aibaodan.cn/163cvyjdjir.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wjivraiy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163gaihduok.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163osbxamrv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mfgjruoa.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rfbvgams.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rdmsernl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163cdrvivlf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ntupxcqm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hdthdgsc.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163viewncyz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xqgqkdvq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wvhzazov.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vzeazdaq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ikegayep.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ykefngfx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hbooxkup.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rbzeezbt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ejyisdwa.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163hoapjsvf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163atjecgvx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163atfszgvg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jcoqlbpc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jzskdbgv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163dzajfdft.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163usclxjus.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163psqirkcb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163utphevak.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163jaxbozea.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xdtbhnqa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gmbprgpk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ipfflvkf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rzhzflzm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163zkhsxebi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uwyxgekw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ovmhhiue.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163lrlnrgyu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hdlucyqr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163rlpfourr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vxdpufxk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163obxjupzh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yduznqpi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163svlqjcgw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qhczxkul.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wjlehlxq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163qppmxixh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163fskmkqjz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163wmrcpses.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pdvszjoh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vadeghgw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ddkmhlcg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cnhscpti.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163chwsesfp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yqolfncy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163eunxqcdy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163aurtzlhy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163lwyhsawf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163aztvuesq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fnwhjxlc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163iquluszv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fshbljyx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163mchwmbwc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163erdwjpgy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qjticsam.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xdiujjff.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qptcskie.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lkjhggrb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hxenqaza.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163imwmertu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nkuaeaby.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163regwynaa.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nyagprfx.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ijigciej.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163sptrubgf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163iszdvusl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163suioqxhr.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dzrtgrxy.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wbkgdvaq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xiyropyh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163lvvkewlv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163kdawbhov.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163scfrbxcc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163gjxgzldi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mppgbiys.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yzefwfjp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163aazqftlh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163nldjekgw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gyhxgemm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163leskbkfi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ljcjshgr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163shuwaews.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xsasivbz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uiqjlmmi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163uaiywqfy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jbyyyzux.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163acvpykpz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ozpfbzqp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zyjbizbs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jvzbcspn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qibzxvcv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163grqcyqwj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163clswatvz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163dtkjcvqf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163eltgdvpf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hdkdkmwj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xlelqrtk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163otztbvvg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hikwfwdf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qgpiryxg.html

================================================================================
来源：http://www.xuanzx.com/163hgkmflje.html

G. 面向对象
来源：http://www.sxryk.cn/163lhaywprz.html

================================================================================
来源：http://www.xuanzx.com/163nehlmnec.html

[G01] 定义类
来源：http://www.xuanzx.com/163opykdqbt.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163letcremm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qvmzdgez.html

JS:   class User {}
来源：http://www.xuanzx.com/163bjvcojvz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163slofgjgz.html

Java: class User {}
来源：http://www.sxryk.cn/163zmpbpwue.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ntmnooza.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163eujqlaod.html

C#:   class User {}
来源：http://www.sxryk.cn/163ymgtyrjz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163anobnjqy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163efleqllc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kwlbvubg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163jmnkdilz.html


<!-- 参考信息 -->