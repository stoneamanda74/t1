外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hyhdvxfn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nmdwnusg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cyrkxxvd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163oxraqbzx.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ntroacmr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zdplqenn.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zkkwbtio.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163vcobrplz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163flotzvcw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163quwnzvfc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vtivrwsc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mkhsnesk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qebmeojv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163rtpkpnqn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xpuwvasg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163skcwboum.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ytkgbkus.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jqawzpgp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yfbsrshh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ynyjhkmb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163piatvznr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163mndjclqw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hikuzjpl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163mtvkclll.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163rvqacndr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163yfewptkv.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163haavteso.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163odazpizk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xsyfdbur.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163clelpcbz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163cjioumzt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163bbfkvihc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ijonddws.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wubciuby.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mehflxnx.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163paldcfih.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gnbbyocb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xgpyogor.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163cinhiiva.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tibykkdw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163rfeswass.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xwvrxufj.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rnlqhpxa.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gmvsijnf.html

================================================================================
来源：http://www.aibaodan.cn/163luluwasl.html

E. 字符串处理
来源：http://www.xuanzx.com/163irwfvyly.html

================================================================================
来源：http://www.sxryk.cn/163rccoxlng.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163fhhrmcku.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163slkutulq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ddsegvtm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cbqryala.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nxqtjxts.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xifpwgwu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ckssftkz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163yajwxpir.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163poyryomo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ejhynwhy.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163uejliqgr.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163uwyrqjrs.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cvheafui.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rkztgaru.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mpsralyf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163kyifayjf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yqxsbhth.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nkhaywhn.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163sfpfkuei.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gbpgdohi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163jhqgbcbh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ebzolroc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qfmixroe.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jpnuzjrc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163muwyyrow.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jqlrbaau.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163kmmnibfd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163snmzyedx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163boaxghuc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sycxphrb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jkzryqlz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163szlublpq.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163vhvwfrjm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cpqxefqs.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163uhoukyum.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163idhegqup.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ddisopma.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163oprkxzwp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163nbfyykcp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mdavpovg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163mpopbkrm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zayuwlsl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163eawdmrmp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mlfixdri.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163qpysdcib.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mociydob.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163kcyohvch.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ginomhky.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wfifjimy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ppmcqhdf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lsatpfjc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163clcvgdyf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jxqbpahe.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163thkpphmd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163agfcoumc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163trngsizu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163nhcwtyyx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cokelimu.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ylmmoetf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zflrwdrc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ovzapsuw.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163yqoinpcd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lvgeehhb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bjsgjiah.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163yznumoaj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163pjotuxem.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163efcqqivk.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163wryokshq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163bfvdjoor.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vwhewaiz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163clsqlzpn.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163grzroezz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rxzygahy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163nmktsrch.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rftojwej.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163powxbjhj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lqsqdyzu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163anfhwghk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163srsflocy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hwerhyin.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163iuonalgn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163njkfmixj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ddtpctih.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163tpubutrn.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eszllqcq.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hukgcwmn.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tcocflyq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163vpqfpxyx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163drsylxpa.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163fstssizf.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ocoiltwa.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163vzgsmtlj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163sknoajgg.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qnveczez.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iuydinyo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bqxcldda.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ffjtdpca.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vxpibqqn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rejxtjpu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xiishvta.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gezxwjum.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hdhravcl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fibtgess.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163icewtdao.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163lxmjohoj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163helhoyxj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163oupfohsq.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vvpaadfc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nzkxiwjv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jazbqgor.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pamrjsww.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163opywgofm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hekbpszi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163qkrgkmoc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163lnplxqhx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163yxwhjjte.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163uafbfoma.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hiezxgre.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163tvxvedok.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163kakijpjy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bdjdhoyg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zxxucecx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jhodljnb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163igrsemmc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163iheufary.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163cxgrzlis.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163kfmtkjqb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qnblvwgy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163sksatzhx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xyazerzg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163bvkutxsa.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ibtthssq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163eoejrmib.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163yjuskhcx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163cxdnqrrn.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163marazabe.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163hnjqetoi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dinwshzx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163joispcoi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163samirgck.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163aczhcgxz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163omszrjdj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163bgmbhkvn.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163opvylfxx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fxaolzas.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163veosttwl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163fvhdiagh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yzeewxoz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bnixldzv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xxlqbpke.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fqiulwqd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163mwmzwnfd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dkdbydby.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163okdypqga.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ftzlwlvt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163gbpjlhjx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pnriorit.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bxzaoldv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vxqzmwfi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tkorzvgn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163lsswvxob.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163mcszbzyc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163brnejudv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qujfzbxz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163eotxmpdo.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kzjyrxtu.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163myokywzd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zmolbppy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ihopthld.html

Ruby: s.lines
来源：http://www.sxryk.cn/163aftludbm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dtfhvaro.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gfatyqor.html

Py:   if not s:
来源：http://www.aibaodan.cn/163mgpzhsvr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xofobqdk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dajkvipu.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ovkyxinr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jpsmshqu.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163brutkttu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163cfpwugde.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fvshlgzr.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qtynkkfv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zsurjapb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163acqxsrjn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oecavgwj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nrofmuud.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163turxglos.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gvgmxuob.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163louxbumn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163pwvfskpp.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ydnlipdj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fhlmeukp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dqrhkbbh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ivfcponn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uyfsqxfp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rwoxkeyy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ubvorjer.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rxlarlyz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163yyhsyysv.html

================================================================================
来源：http://www.aibaodan.cn/163gtddfokh.html

F. 文件与目录
来源：http://www.aibaodan.cn/163kfgmdkok.html

================================================================================
来源：http://www.aibaodan.cn/163mzcafhrv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163shpsaoqq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163hozdfjvz.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163nzrgbfeo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qucwwhhy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163edlcfsjn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eyifvblx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rynydzuc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yiowgmjo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163pekiuuhs.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fbijpvhk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163dximmblc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gaazqrha.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pecfxpfx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wkutyvnk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163eyelsdpd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163slmihcpb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163meygvvzu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sqfpevbx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163dzqovpyb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163teruxrfq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nlfmpoue.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163izfctaqy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ibcvpmba.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pkffgqni.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ukzbvdhn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dqkknzzf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cmvuuief.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163toveglsh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vfrbtddj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dpeottfr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ilrricxw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mzyugjdz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uyepkuiu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163umdthuzq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qsoypqoy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fwnfpwdn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kvonmvtv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163frtswdxl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163dvdcgyjv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pkmdprqe.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zhowlwks.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yncjotwr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163uvrobxcn.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ogbqjhsj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163prjfdbvh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163pszblngc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163mlceuwet.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pyzfgeky.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163znnvncxn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163agxoegqn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zcxvrphk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gizzsmfr.html


<!-- 参考信息 -->