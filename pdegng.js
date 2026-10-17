外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xyliletx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mnoqcwzp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ptzapyid.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163eqmnjetd.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163pbkhckix.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163miefyuoc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ovedtdji.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163acnlsjve.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163hockrvba.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xogxhyaz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163bfjyotsx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gplivhuh.html

================================================================================
来源：http://www.xuanzx.com/163setyzuun.html

E. 字符串处理
来源：http://www.sxryk.cn/163gwakmltg.html

================================================================================
来源：http://www.aibaodan.cn/163dfkzmsob.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gbukkyvh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163voemqlgh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163trbqispc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163motjlcav.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163efgzlkxl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163qdrymnwk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163aemjevwh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163moehvuwq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vihvfibg.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163uqvorwlh.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fkdbcuzx.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163hdvjyjqi.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163aziiiugq.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wmnouihu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kncbjynl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163mdebfqwk.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ktfqkpxb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ghcfnfme.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lsichuvz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ipsvxhbx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ohnpwiek.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163zusggluy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163yndgvzui.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163pyjlwnur.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163fhvtdzew.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mvjrkrzv.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ovolsqxh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163jusemcwa.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163bjcawzty.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163yzlicdob.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163iofiymth.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163phlcpthn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wambacrg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163flzuznxl.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bapoocar.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fevgswcp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163afhzqrxg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tnytxoei.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163nkirrmas.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gviunfgy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163mtzyykiy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wytqwuaz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163fyimmvmq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163aulxnodx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163buecbvux.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lqukofmh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163lwseypqs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163jpmpoiwk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rxrnkhsz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oirzqxdh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163edcqxwxg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163uoqnxhph.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163abmvxqjb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163avoqhavs.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163glyuwxlj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163cbftlxxi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163pqrtotue.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rzszzkof.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163gnhjcviv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163crzppmrw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163efktzsnc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163hjxwkztx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163fekmyeze.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ddmipmpg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163snnntgcx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163uuurcqxt.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wcwvayyq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jjnxmefq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ozxofads.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163flwvcwqc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163fsgdckrr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163nihzwbeu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163zupuyfmi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lxbiepdw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rjrornjj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ghopfrpe.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cyazoych.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fofsdiqf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163kfcuwobj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163yxjmjvej.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bzcvyuam.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163okobgpzc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tlykdiji.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ixqlgnzg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ivrekjdc.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163frrljuvg.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jguvtdnm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163znvutzyd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ascrwjec.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163lphmoiue.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163unqtxyjs.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163tnvzwwxv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163lldxpzim.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cdawimpv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ibbspnwc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163iszavocv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jxgfzgnj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163agxjhgoo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hajucofd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mjjuneio.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163mkfsastn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163eiqnxirh.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xgigfcpd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nremtucz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163svcvnryn.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ueljlotp.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kezmeslm.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163cvxbcnpb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163fsgkzbwj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163nqsekgqq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163oplgaouh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163blrpffor.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vhhebjxr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tpzhwomq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fpqzocdg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163rrtunuqu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kakjckhn.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hlbghmdq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163oecyheij.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163yoeeulfq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rcmqhrgl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kguygkbk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vzpxynih.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163eklzrhod.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163dvnqrghp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zkzcdrrp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qzzgewsp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163rtxppyeg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vcynbsqn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163pujtpfxi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163pazbplcj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jxvaxesv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tjtwykqu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163cnntcnoo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hnpaucqs.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163obgcbhng.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dcwuossc.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kdgifugn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pyrheyes.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bbymcfmj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163bwcehnuy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163fdcvhnmq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163jpwfzvyo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163yrrwahtp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163jucullsf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163seingqki.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zxahwine.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lkzmbxau.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ownecgbn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xjvypxzu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163uuewnqov.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qssnzwkk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163jvmglror.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dzkkwykz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qyvmcjvv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ykomrvgt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fgrxfogg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zjxxlhcc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163xklpdldk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163mnaoupec.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xnqlzyfo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163snpmhlcy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pszkvroz.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163mpucimwh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163dqtdnrty.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mtvwadyg.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xjsfmucb.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qmtnhpth.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lmnzzjdk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163pvrpotjy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uwjhieav.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163yaqfrphz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ymosbzwi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163zmjxurcw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163qdlrlupz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sbdzkiay.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jtgxvdpx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nwpgragb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163gqjzaqrt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163eulyuydy.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hgzrtyiz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163nwmmvdxa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hjsptwkk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ajbrcrjs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aljrlhsv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163srujykyx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lkqjlbto.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163exzoaidu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zgkkmehg.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hznetzgg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xhhinzsx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fpqqatav.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nrzpdppc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fzbzltan.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163vbgxupcs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163obietufp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vsjlowrb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rxodrfct.html

================================================================================
来源：http://www.aibaodan.cn/163qzuaasbd.html

F. 文件与目录
来源：http://www.aibaodan.cn/163epowraez.html

================================================================================
来源：http://www.aibaodan.cn/163ncccfxoa.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vytufqca.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hmzfyucj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163jsevqazb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163siorhldn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ykwzmpjz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uomvigzq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dirsysrt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163bygqhxas.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qpoxfgis.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163chlpcyzq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163nsksuxht.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163gcwgjyav.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163llntmnte.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163awuegrma.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163igbypygr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163adsfpqty.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163awotdlor.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qrmeyiwu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zhwwwncr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163bvdthifz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jipvqlof.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163eekplsuy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rjzcnars.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vfdldrkt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163omewpsyi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163blfbbiwh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163csqjxxfp.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ttmdfwol.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163bpxwimqt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163bonmolnu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ssgdxkut.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kgkxftfu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163sjqwexse.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bzcxbqsc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163pumwxstk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163umladocu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163johdxqcr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ekbzzdkv.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xcuzlrpp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163toawuguq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sqjjrzxz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ddggembm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dyxteaap.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wekonzdt.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163sasyxhfd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163esycldcz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ejjjarjj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ihhxfsxr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xuhwuhht.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ynxpetov.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wfjtucup.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163jskmbuif.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163bczehbjw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163upxgdtrc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163dvrhsoni.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163spfrxlxw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dnhzvzbo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gvqmhttf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xgrshyoh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vfekpxoe.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163gqqjwfvi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163fxskchvv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xyojurpe.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mznlpeaq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fpahnode.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fgdmuqqg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163iidyrtqf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163onmcjtta.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163igjlvbgm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vefdalbm.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ueomrzos.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xxcfagas.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163vdbrzbvo.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163nbtxbdlx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163gqqdlgyj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dwidkmvu.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ptfowvla.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163afkvzslz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ikhxyhkv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dwwekdwx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163yvfcgmfc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ateiavvl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163blvwpybp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163zqixbgnd.html


<!-- 参考信息 -->