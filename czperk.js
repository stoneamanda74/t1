外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163osvylfop.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mijcguua.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tlnhhbmg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163sjhzjbey.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163tquqqpym.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163kxjnstgp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163fqbgfgth.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ofuymkvo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163iwcwlnyi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wifmybzz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163mrscngnh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163glzgncca.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ujljgdko.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163todsgtmx.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163chkdpnyu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rrkjppuw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163yxujhwnw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kpnfdftt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lywtrsll.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163hbmskfos.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163uzzbcuku.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163geezwybn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163tmcagsgl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gocjbsai.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vdwjvdfm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163dnikofpz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lpofdehv.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163uwcpdzhv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qqezrdxc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163lrhxblfg.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163cnzirqdu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yinqpips.html

================================================================================
来源：http://www.xuanzx.com/163cyctqxhc.html

E. 字符串处理
来源：http://www.sxryk.cn/163zxiigmnj.html

================================================================================
来源：http://www.xuanzx.com/163jrrybbll.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163efnvprtn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vzifwpll.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wntclxuw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sciyarob.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xtphkwdj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jrwfkyrn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163pqzvdhvx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163iqmtdyiu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163hiuiimfz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wqloxqjg.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xugrphii.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163symltqqj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163semvbjnn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tmshhlpa.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ghwalndb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163cwvytsou.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hlxkppgq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vdbjmpsu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nsuouodj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yxpvgojo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ozszhdge.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xtejphxc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ayxeodfw.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dfoobtfl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163grtihxmj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tgjfhuha.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163adprgevc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163tdfybiqc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163sxdidmtn.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163vcejdldz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163tzeucbjx.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163pkddrzwb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163hvmtvehx.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ylszdizi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163uzmswfru.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yzfgzxtr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163svgiwxkk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mmfwxxir.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xeqemnkt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nzyxadir.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rthdmtsp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sckbfzei.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163lguhcgro.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163cliqzege.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xcdunjsg.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lyojwpfl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jpwefpug.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163wttfhyoi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tuhylpcr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kwjnpuzp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hbpitsld.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163xtxffsid.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mnccueqr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163dqjvtdtq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163obswdszs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qqmpphms.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163llykbwor.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163vcqjynev.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163rxxbqvue.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163plsgmohz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xwaegqrm.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163lchuqtmp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ervqsmzq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163egiiofek.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vjmxgcmz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fjlnyycl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163gzcqkhjk.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163lwkidumy.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163odyvjenr.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wxvmdssx.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zscfgyap.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jlqhtsme.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163dzazpikz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jncuotcr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gdcajrae.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fuandrhm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aytcxbjv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163orifeain.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163crgukxpt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vwyvjczi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163knipyfmg.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163eolaurwa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163yekbakpv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qorhjzqs.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xerbooaj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pjmlgwsd.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zhoshgni.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163pywlwujt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163taxucszj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163lhtevgpn.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163chdhypsp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163stfzfcvc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qokylvdy.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rejttceh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kyjmbxnd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163zkmjhucu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xbxjatry.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163kxihbalk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163onydavig.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163upxekkua.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163iglcrzay.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163obtjuvug.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163peyioagm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163npcanynz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wvgnsjfa.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163pgalvubo.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hpmirhkj.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163eybyhnpi.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163hupsozaj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jstfjzfd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163kkfzpkio.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xztgnvlq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163inbhexrr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163zuhyrxaq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163uzcweefp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163pjpjnvyp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dnqjyudp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vifcmalp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mnlkpkgt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163flstirbl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xseprxjw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163sdzmkqyi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163cmyjcskx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163pnlmqafe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ssvzfnxp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163dbmljfuc.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qzinvife.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ndtannhx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163xsanujbx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163yppakubu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163bmktxykn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163fuzxjrog.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kgooelwb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gfqykroe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163gqsygcoj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bvoirqnh.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163gitjiheh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163htklwawv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qrsxnesy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163scplxxbn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163msuntzug.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163rwiulxbo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mlfjceum.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kudblick.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vrehblhx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163rhhutmzb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kbliltti.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ihvawkrm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pmbomivi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163rsgjxjhy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163muhyaldi.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163tholzioh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qmiebabv.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163pezrqcau.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xphevfjc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qezugrcr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zebpuoow.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dxzmjhqw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163rqtvtwpa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ppqyohjt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163lqdtrcyf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qqrgkoqb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163irymssfg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wrqdslru.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163armzqfdu.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pcyemspq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zbcxsnhf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163yfkoxbrm.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ruwtqecr.html

Ruby: s.lines
来源：http://www.sxryk.cn/163defebjay.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163gkalsmer.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163exvrxpum.html

Py:   if not s:
来源：http://www.sxryk.cn/163pnukcplc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ekkwhblx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163cuofdmqw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163mesoszck.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ptvahrsr.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lejlvhai.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163sajbligk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163cbzrbrss.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163lsolaqfb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163bqudaupa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163byiuyttn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dkdoicmn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wkqjpfhh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fqroskhm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qaqaucgc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163gbkakzpu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dshkvqoh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ohwfxfdw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163carjejyc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qcdwmcfs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cupyepnx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rnqoebbv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163eqvqernd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163omqmpqya.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163oowbffgn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ozfkjzkr.html

================================================================================
来源：http://www.sxryk.cn/163jhhvgafk.html

F. 文件与目录
来源：http://www.xuanzx.com/163tqzalhpa.html

================================================================================
来源：http://www.aibaodan.cn/163cvxcjhpk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163irlbqlbe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qsbwudza.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163nvyisnbx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bipsugji.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163icbypoih.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yncwnmnk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qubkzcgd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163sszdaltt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163tbfnfbcv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163gkpcngjm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xnhymgwm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xndqzohg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pdwzzpwa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ermhiokc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ldapsaph.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kmrryxfn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163pdkiceqv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163uhboqkwf.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jhyzcjug.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163woiwrcnm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163nkijsdim.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163thsybntz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lhvobetq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163yklsfkaj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wsxpyuwg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dshrladp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163embuxupg.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163unonrssm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163mdeqigcs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163udfxgmif.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rntokkpw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kdajokrx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dbfjnzbp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lhkdlpow.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163twkkyata.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163mvlhtgpg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163kbleaumc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hwmcifof.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ycbbvkzf.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hsowwqce.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pqnjvooz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oyhubsse.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163lgvmnoaz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163kyvsdkkz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rzywzjyp.html

[F06] 删除文件
来源：http://www.sxryk.cn/163oxaqmspq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163pxvqywjr.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163iaiejjqg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ndwrmddw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jlmfphdm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uyfqysxo.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sprfksjx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163uwcljsgz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163bzpeqkjf.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wrxwvzpk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163suqatydw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163kxxjehah.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kaztsuex.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kjozfwgg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163uqydrydo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lnkhdxdv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mgofczrd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163cbcqevyi.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xoymbmgb.html


<!-- 参考信息 -->