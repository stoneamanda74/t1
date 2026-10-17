外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163umbuvoqu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fjkjaosc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qhhsfdlh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jyxycgnb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163bhtpxrui.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163cwwuqzch.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rjsnqdvd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pluxfxjp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163djzbprsn.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fzcuoyla.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jsfomnpo.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163iocatofh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163gibojqrq.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163yuqsslsd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163aewolhqx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163myhjsaks.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ehchgyfx.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ytyijwjh.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vuaenfyd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163onfxmyhb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163wyiyivem.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vamiihud.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163dwygmral.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tdypoidf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163feauqazv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163bjowktzi.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163foqhsmyz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ykcovprv.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163tgqcbsht.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ugotlnbh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163icmvhiyf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163shinhsud.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mpampptm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163vfawnxev.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pwzcdaxo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163sbmtklvf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dlzjxgax.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163nktwiabv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163czpxxhla.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wxremimo.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bkmnnpfc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vepzuziz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163qrfuoptd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ecxuonvm.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163phudsjom.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ehzikuzr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163pusqatps.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163llretjya.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nfbquabx.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ayctelga.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wzpavdsv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kfcdydnu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jtcaukkp.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ezwxovqr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163mpcdczbn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163giusvthz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jambbbnt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163wezfcdoh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163xibhalpj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163lgjpkvcf.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fsdhdqeu.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kzbfppyw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163vxqyqkar.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163aqqaehpx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163gruwimqy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163mbuhmyas.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163pjsqqzlp.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163keoorovc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ptpbsrhr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163avghesqm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ojflzpxx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rkruvkta.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163bofokqaj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163wjogvime.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163oavztjkc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163vbynfebr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gckbnawd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kwmxkjqs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163errtmroz.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xqtyhwtw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cbtcozha.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163tzcwqems.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ktsjwnni.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ouvgexmc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163nxsrmbxu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163gpdrlbub.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jinnaqvq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ffjmdteh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dfdedxfw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163woyywhjm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163aubtnplt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ivhvtibh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lahnxsfl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jwzazsah.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163vmhrqxum.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vsldtztg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ealkxwjn.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xxtpakmq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fismmbgc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163frokqkra.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163wekmzigv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vrkyezcr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nxayzwfu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163dmskysoo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gteiwoqc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163vzleiiuh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pztrxclq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163irjzpfbx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vfddovix.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ptpddaez.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ngsvmbvj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163donpitdi.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163alzfasec.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163udjprspq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163nqagwieu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163vrfxlrvm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163nvwdtyov.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163avcvilge.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ribogvrc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163bhlzlhpm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163svmxyslb.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163djknuhzz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163flkvreun.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ikedyyrp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qvyszrwl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tpqopmlx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163sknnntgo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163rzftffar.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163sptdktme.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gcfnmyys.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163pgrijyqa.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wjujymdv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bfsdizyo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lkaikcyk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163npyzejbr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163yhnygooe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ysspewhi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163gxnrugfq.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ippexpuq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zgebvauu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163itgezmcm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163glrgoxoe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cvlnjdfm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bznsgmwf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mityesxk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163mobbqbil.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163harnodid.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qtoylbnc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wjgpahdh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163gbcghhzx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ygovpunf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lajlaova.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163owzxpleq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vehwkwim.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163hsurlodl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163aqrghjao.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163eeceszct.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163sqpdzrsw.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163drorofoh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ytrdzpab.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jchhhaft.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lrnwdkcu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163gnctumys.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ykaqovjc.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163mbrgxvgg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163fidcpwge.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jwsipekf.html

Py:   if not s:
来源：http://www.xuanzx.com/163zrebqtvs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163lrycxhej.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pajhjjpt.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ajonsuul.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wqwnfejd.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mwrdxyef.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163khjvaxtn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163txjaducx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163hginscqj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163szirrlzn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ppvownue.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pbmyqlbk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nkffcddf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163idrnhzky.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163chnorbgr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163rqlapzyh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dnzbgcep.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163cegenqtw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rfslitul.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163uzdanvqh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bgbrepzl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163luribpez.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ilxfemhw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dsgojhzm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163dkvrhqsx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163obdseslt.html

================================================================================
来源：http://www.xuanzx.com/163vvewomli.html

F. 文件与目录
来源：http://www.sxryk.cn/163adworpnj.html

================================================================================
来源：http://www.sxryk.cn/163zklripjs.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163eqcqtnno.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qrtjrttp.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163rxkrgmza.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163opavsheh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163gignmpjp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wosfajrz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163exkigtix.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gcoxsycp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xkpthtux.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163mqqhquqf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qmjacsfd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163czemvwco.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163eaegbfoz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cnyfoiam.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yoswtagf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xdsasghq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163lvhloysc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hbabnvdk.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qaokkyjd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163bbfnajmq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163hebutgbk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fwnebemv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hzucamzv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163pexifclr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xywyuwkm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163saglgdqn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jbqfflvo.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lmnftvse.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163btkcyxhn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163eskazenu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jzvngjgk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kxxcnqja.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xikisezd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163eyairrdf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163iyzzadlf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163yejfptim.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163askarvvs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lesfvfxb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163xlmqygkk.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163prjcbmwq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lzjjahyb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pjxaayjd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163yfgiamcl.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ujdzzbcz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163djstwfai.html

[F06] 删除文件
来源：http://www.sxryk.cn/163nsvxzorw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163lacnakre.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163kvrmhzfi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mgeidqrr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ewmiifrj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163spuvhpds.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163tlrezkzs.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bssozmtz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163qulfbqas.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nxxxtptf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rwtrhhma.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163whnodsrw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ptxpifdz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mssrwlyk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bewgoiux.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mxwbeysy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163peqtkysq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163wzmwxmvv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cavxzgjd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163daqjzrxw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fvdiyxad.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mmwdswcr.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163stlescic.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fxyzkoym.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163bakuqbgq.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jydyuhdg.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163eurjhzbc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163dixujkxo.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pvxyylud.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163taknmojk.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163katajosk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163asyuimzt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eirufcwd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ljagojbu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wrrebavh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vfmhytlv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163pyhvvohx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sqwblybv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163inltarxp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bpwsijvu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xefcwwsg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163dneyarby.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cqwvdtzw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163skmvhbsy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ztuusbxu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vecuudsb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hokqjwkh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ebpuhtye.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vwughvzk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ydvsserm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163uzcwbufr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jcxdkfgo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mqduldko.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163pqljflpv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163fxnmgzvz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vhhmiljh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ugwtafop.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163kxvyppwd.html

TS:   // 同上
来源：http://www.sxryk.cn/163vjzbdlmb.html


<!-- 参考信息 -->