外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163oltirxre.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jjspsahd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ytkbrecy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163xbwybfhl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hddixjut.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pkekxqff.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163gusobcjp.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163rjbxtrfp.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ehjnrbqh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cbsyfbyx.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163twostihp.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jhxtmpyj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163irtfbyzz.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xajoyutr.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163omygaita.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zihicbyr.html

================================================================================
来源：http://www.sxryk.cn/163qiknhskx.html

E. 字符串处理
来源：http://www.xuanzx.com/163grieqzev.html

================================================================================
来源：http://www.aibaodan.cn/163zbdkhfpq.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163pmlbzppz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163byjwpxnu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nhptqrdm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163saytbpfu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vublqwvt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cyloqist.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163imwjmrpn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163mttciaph.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ayovstpa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163xvvkksyg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163okphzxol.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163vapfnmre.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pbnmhkrl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163sevlqsbe.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163sqgpldql.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kzidnkkq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ycxtlyyz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163cmiqpffl.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163yhfjnirb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vcxcwhno.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163fcohvjiw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163lxdeuxab.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163nqqhdadj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163miintekp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qidvwgqw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163pcvvikgl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163iqquexlw.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163amtuupby.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163dwqeutvf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tidhiqjv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163aiiynaao.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ylafmhrg.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163pmrxehaf.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163brrgbjnz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163dqziwvyc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tqcwxvdm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163mojtldah.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163idynykmb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hgmxjtcb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ghmdjpee.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cvrrjghr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rzobvylo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ddwbguwa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163bfppbpiz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gltqwtlz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163myrpgkxp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rrhfcrsy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163mzuyyhuo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qrsjqrjb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iiifudka.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cqujscpa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wfytblrn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163yfxfhmal.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163wcfeqhip.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ylhifdsr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nzchpasm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163lnomwhhs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163unnzjkvw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ubneqwop.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163peiicgfb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163bfhfrjbc.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163eeeehlgn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hdgeorsl.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163vcqkbuno.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163sepbypng.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163qtoslaud.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pftglsvi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163mvgidsfm.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mvwijlil.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vqyzdbea.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xrgmzzbf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163htpqahpj.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163wlkfdgmu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163tuphazie.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163aooohauz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ledrxocy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lcljfxbq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pfxvsvfp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xaakjxdz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163pqorrlju.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zgvhnmmf.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163bkmrcaif.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163inivchvu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tjrlgzgs.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163btlphrkk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bvmotvja.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pwgdonxa.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163aegwlizw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ruweuhmm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163whmrddca.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163cbvsqphy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163senqdjka.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163tatsevmf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163spkpjbuk.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mgtgzeqf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lltruoyw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163bzdleuyy.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ppjtpzxk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jlrvfwch.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163nlvztndf.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vyqgivqr.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mdvhejum.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bxdkuoix.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yfmqrzlc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vwbfiafo.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hccqwoli.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163dvwzpdqu.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163bkfoxwca.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zvhfakbs.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163opvrrrqe.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163irfpaeqb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163susrkkmq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jrnlxbne.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ocxabomc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163mkekymhf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163molhkmyk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bjujcbxc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hlmdehtl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xbsqnxwm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163csikwbcj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163olylulyv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163bpaqdiie.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ccalgokt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ybwxyhmk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dmnfpcqw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163yyclwgld.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vlgyrvue.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ykcjcrje.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xkyjymug.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163isgtqkht.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xsrssvlj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163sxqcmdjq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dzcgrssy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163lucdtycw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163maakxyfi.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163liaayruq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163uxvppxwj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zprqrxkv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vopqpnwr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mwewhsqq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ccsskmxn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163spvyloqh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163txjniqwt.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pmfehyjz.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163qudaptmz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163jlinhjti.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163eslwtamt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hzwmkoiy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xcrrhhvp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163pqtktxin.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lfwjjchm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bvhwyqgv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tcekzllc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163uuraqvon.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ncavjbqo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163vmjdcsxq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tqbbcrwu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xtptreoo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gvjolzvq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mgnukaef.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gyxdbkhg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163rmfocbpe.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163cjjsvxwl.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163widtnmey.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163czkaoxso.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fuuhllbz.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ewziibga.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163yiribsli.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163yjrvgrap.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163broghoyp.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hlkbwofv.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qnlorwgy.html

Py:   if not s:
来源：http://www.xuanzx.com/163xscovsck.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163soqhvzwe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163nvfiralc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pkglxvjj.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163cczvtdxg.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ypcymxqz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163tqgaqibw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jtxjyqkd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163yxfjibws.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bdossnzx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xnnswtch.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xsuyjrpz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sntvzdhq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cujzgxwo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bzswyogg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163yprsgiar.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zgsbbiuc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163gterpxrg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163itcwbjat.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eavxzjui.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bisctpwe.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kqromkmn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wupjrhjl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163kbycetsa.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163uukzpuee.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163unqtlbed.html

================================================================================
来源：http://www.sxryk.cn/163itsfhsje.html

F. 文件与目录
来源：http://www.xuanzx.com/163wdhzsewx.html

================================================================================
来源：http://www.xuanzx.com/163haussbca.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dbqccszt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wajggfjh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163kfbkweor.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163edxmfgsc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mfkamwfx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gvvwttvi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bqjniuzq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gojqgaln.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163chtrosbn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163dvtxsblw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lpyhetbk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xtpurpxb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kjvhbfyo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vadnpxhm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163epuykdid.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xsealfha.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163abfsnwhe.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163umptofye.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ndscxdvg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163japuoomd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163whtihoqi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mntagcrs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163otaxiuua.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zjsdvecs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163dikkwlgi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163cfbcerin.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163agodctfc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wgbacazw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163thlffixo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163sbraofcz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xxcyzmiq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ccbvbhyo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163defmzsvc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vgxuiddy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163utktzxpd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qdvajsmy.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163titpkjys.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mezjfqix.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zrzkfzmq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mdvcvjol.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bzysavmq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xtumtkro.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163shizjjrb.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163chyzbzts.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163hwdyanaq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vxaboxcv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163tiihpgkb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xybfquhm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ggfagabr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163feqhqtew.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163agskojnb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163eotwurfk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163doumdcax.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163srgzqrrn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qynsmokh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ptdpmhti.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163spkeeqwu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163uyvxgfbm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fhcolrfs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hhdrywnh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rhvlsubs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mxwdgyzr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gnwqgigc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163jbebbbld.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nbyfkotj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163lmngfzqe.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lokcdfnz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dpgymfbv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163phxfheua.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163uclwyzhj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ggwpxowr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xtozelfr.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163szuqnsbc.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jkigonsz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163fxgenwox.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ljfjtbhw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163evovpnln.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163byzefona.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rbodgumo.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163oawclehz.html


<!-- 参考信息 -->