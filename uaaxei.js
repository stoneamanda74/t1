外链999!wailian999！

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vabxunbi.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163kzkoizje.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ewkdyluu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163sjaytpjf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163mkqjattl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163uqolrfpn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bjwxhoik.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pqrhsvhl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ihpbpeet.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hkvnjcca.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zabahkku.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163lweimxfl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163evnpfnzh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ghiahwsg.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163kibzonrr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lzgcypti.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163npncvrhu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qepngiwa.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gvhtzysk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163wpwkeabo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ckbpwrnc.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jvnfjpgu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163oolxuyvb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mdqenvid.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ozyscbkl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wnawvivk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lsjnnlzh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163buqknrra.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sejhcziq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wzaqhkbh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163yxarojgv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163rmzxidzw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tfkywndz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ljckjmra.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vxrxidat.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dfmnsuwr.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hqszotiw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mhxhosbo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mypmrdrs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163jkfbfhyb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163idyplfqp.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163wturxulq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163eywrdaoa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163eurlydmc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163hmkxqfee.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163nueqkabw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163pjzjjslv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163kfcfzkvi.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163iciqbeac.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163fjbsvgtv.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jvrpyqrw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163jbqzfanr.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wifhpybk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kacuxcjo.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163cpjrszni.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163kqzvvcmv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wltnqlmz.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ynzwgixo.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ukngennv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lvhecuiz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jkmjdmdc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163uucifwtz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dgauknvd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wovqukfo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163njstctpz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163dvcbalyi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vbsiozjo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163uswvdhnz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jgkrgpmv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163uclfvnye.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163pjxkzjfu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zmykqovx.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yvpxnrww.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ruflscxt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ndrszqel.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163creupxdp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163didrfapj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hxhwrwev.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bdhidpit.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wuxyijwz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sysenqix.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mqzjtvdr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163mewzcdws.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163dihnzqbw.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163afutdcca.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xyhsbgkn.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163dtbuevov.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ymqzynkt.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163aegnloxn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qbfbmcin.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oyjcdtah.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163locsuzkz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cgtjugpy.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163sbdrrylp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ivbkjfox.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bcymjlpy.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rfgemqfl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ughpcthw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kwsybpgg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163apsspeuk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163eqwyxxbr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163lurniixz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vhhoxjyv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ilcymrzv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hffmngpz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163zhtbghzx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qbaqtuyi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163yqnbiynt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mxmzcnod.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tnbqjnwp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hqpvqgwj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163azhleufz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163yamvuquy.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163acotdgrq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mfhxqhoa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163iwrhargq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zzaddikc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ctdevlev.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163lvzsnvxu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wrvjfane.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163noumqmpj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ogezyhep.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rwleovzz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ddturqyh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zrdbvtum.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163njjymsnz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163iprywwxg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163frakslqr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ygzcifma.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hlmnpjct.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ewfkjeel.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163veectkhl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kaxclgia.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lgdvskep.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zcylfete.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tvmdmvyy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163etbvqaup.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163dwxsaeum.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xbegittj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163sddnngew.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163lifxhohj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163weclzjqm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lsaqrzbi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rsdcughx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mwgcyxmk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163regeolzg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dgcorwfd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163uczxqmjj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zpnwslpf.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ovxhrldu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163iyeluttk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163veegloep.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163iyiryacl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yoqktpbx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gpzxqbzz.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163itdnspul.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ntcqmxea.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hmcdbrcf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kpocqjzu.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zrizkwdh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163oosclsqk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163msepgfzs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163drjkounq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wtlyrvms.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163deayyohd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163oqcbaglr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163qvhikfjd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163nqgkvrzj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ajqoabtd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gytleuof.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163etyigfvf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qrwzkpzc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mbwfheln.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163uecjyzqa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pfzyohqg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cstbpxdj.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vutecsue.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xikyemuc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163sagyprdc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ohvowbmj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jnysjpuo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hllyrwei.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163aufjzbyn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wvxuslsv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163vlewyqhj.html

================================================================================
来源：http://www.aibaodan.cn/163cenupglf.html

F. 文件与目录
来源：http://www.xuanzx.com/163dgemzjpj.html

================================================================================
来源：http://www.aibaodan.cn/163zqwqemui.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ksyipvxc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ihimrdrk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163nazvbizk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163kfydnqoz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ngqoqhrk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wxieymbe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163suydqjqj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163lykgghkg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163toofuxkq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jwpfjats.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163inmndfkp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163lyklxxuc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163eyjoochr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163htfrlbqs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ptuxdtpz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163oqwniqqk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163cwmkqvpz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163npnznuzq.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xzbpadgr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qlmjcgdp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163irbifshc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gzilawbm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xrbnjhgi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163zreyqpsl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yjamkmio.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fuyxyzrw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163oxccejwd.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bvkofqwy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163mgbwproi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163glvbckhi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163okkoqqys.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nvksislm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163sudurkzy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ttoxnxtz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rvjzccfz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qrcskxim.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163huynnxfn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163muhqqnir.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ophrttqp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rzowigqs.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wplpwzir.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cbutxkzh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163fbiqdims.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163oqggcvff.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163uvlspkgq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dxrctekr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163zlkdtamz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tsqcdqeq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163noglqyif.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ccqccunz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iwktcbdf.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cjlkigmk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163gddyoonk.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163fngoaktd.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jrjtscsi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qqeprvzl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163gznersru.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hdbistks.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163anaibqwn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163vxyqirjm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jzkyearw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163lrjenikb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gsqmbcvy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163qgobmrls.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tvmmlwjw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163unrwqxxu.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kxycdyor.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tnlxyxgj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lyglgznk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tudubfte.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ujdbshxr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163jpohkkhl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ohvhaufq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163urwekvvf.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163rknhmmek.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qskbxdla.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zrxhlasl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ztoqehcn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gjjlllzf.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163egymolra.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xeliiqmf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163fmkonrar.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ftwqgqvw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163upujqkyc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163flonlsbd.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fgrsktym.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163kngqqknx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jxjmwmae.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oqmellsz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gczdeqpr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163acbmerbh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163agzesovw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vyvnoqqj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wqmtubpg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qmqknesn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163aeswymem.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163fhqntkhe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cjvqomhu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rjyhienj.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zusqvzda.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rwnjacse.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163faksxqig.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163chxxtkmd.html

TS:   // 同上
来源：http://www.xuanzx.com/163qtgywrmr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163yflcsqla.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dlqkefoa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wqbjglwb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163xadwyapm.html

================================================================================
来源：http://www.sxryk.cn/163hixoqvar.html

G. 面向对象
来源：http://www.sxryk.cn/163veaxlwvk.html

================================================================================
来源：http://www.xuanzx.com/163jhwzfcqq.html

[G01] 定义类
来源：http://www.aibaodan.cn/163yyqekisc.html


<!-- 参考信息 -->