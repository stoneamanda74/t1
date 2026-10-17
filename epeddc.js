外链999!wailian999！

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mfrlirfa.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ofixnmna.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163yvejxxuo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163iajhaclg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wncqcnzu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163otjteqgx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163sqscbynj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163fjwgokzj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ucbfjzro.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163tqhxgarr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gmcxrxeq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163xfqkfozm.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163noegtauo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mrqrbnan.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163immoyhdw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ckbghhsd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nldkohgl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bdmchhyb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vznqorxz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jeuqwmgf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163koxfvawt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163okhwycor.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vaobzctk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gdpckyka.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lnuznapv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wigfjgrh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163suytevyd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163btaqdtmk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163nfnvixsu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163kwlsmews.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163twmflpxf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gwygjoyv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xdnrpmkc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dvuimtnc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163msifargq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163grztrsfz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zwtpuesa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pegkmmxh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163kensmmpr.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wppofshx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163mdtmfqhd.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163yzdyonaz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ukmntvsj.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ydbocsfg.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163atvvxyjo.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zollhdrf.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ukikktkv.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vrpgomvz.html

================================================================================
来源：http://www.xuanzx.com/163npceuuki.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rdulrtqv.html

================================================================================
来源：http://www.aibaodan.cn/163fsiakthk.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163tulqzziu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163twyoxlfo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zkzohimd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qmvrwmko.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uvzlzytf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bgpwenyn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ooentchv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gsujqmpp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163pdpxpdyf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163kypdgopu.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ctmxsqav.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163umszfgno.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lswxgltb.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rjkdxgut.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163pxvnimll.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163lzltjtrh.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163peahkgjm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ugjftfus.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ggshbyjs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163sgumgzyy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mvwojphn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163yjegljkw.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tpglmoml.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ywcwtevx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ikqqgbma.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163lfvkfqok.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ipnjmkkr.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dpasxbjs.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jqyzyaxo.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163oeqsdjht.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jzvbkeru.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163eiekeojt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163oneimahm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wtlcczxm.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rqqgpsmr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pvlntcnq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163dzaqfyen.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163hrmjoqss.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xiyxujul.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ssfgygau.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mfihfktr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zwjhpedz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163aayqgwpx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163dimwstrz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tbexxabf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ssxpouoh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rlekjzbi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163psukaqvo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cwjssqyt.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163toezsymg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cnukrypg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dciictsb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mcerzdeu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163xmsyradx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163pnklehhn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163chweldpl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163jxjzysjf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jeujokrw.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163dajcdfum.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163chnjedwf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163gsivsejd.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ykygfnig.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hcqvthtb.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wyqsbwpq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163seixlbiu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163dmzyaqhi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xjpacwfa.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xzthkcnf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rmslktua.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ntcrnbai.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ixrhemsz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xcxvubty.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163bjbowtkj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163epqrbfuj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163bcayfsoc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vzzvswem.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jfihdavj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163wpheufmr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163avxmzidt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163odltyhuh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163hvqirlqg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163vrxvbkkb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163onaypblg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bxzexqax.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163lomjysix.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yuabdkam.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163fpiwavra.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kpomuzbm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163irizxjay.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163zpejrmrt.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163sazdhrmb.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bgbwrxqf.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xxujmyrf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qpnqpodk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fqcoxyfh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hwqngrgz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163iyzbcuxb.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163eurikivm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163scobhtly.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163tmltswtf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hrafizyu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163stwfypvl.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lneumprd.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hbbbkpyr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163esmmkqet.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163mpxguhcu.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163lfotbgks.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163pxvazhdh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163bnkkfzpe.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ibtjiaje.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163lctefyrq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163poefktcu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ahqjtybc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163btirakho.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mjkquawk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163slehxclr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163tykgaxkk.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163nxynxfpg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nmqcbqiq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ujlgwpyj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jrmtuilc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163awfculzy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163tztazjce.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qvfixpvy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ltvlzcvs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kvkkhihh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mbfwlxpx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163oagatqgi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163tqlzvnje.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rgcbzjmt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163rhdyhtum.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gastlwxl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163kfdskveh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163kpauvzxp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ccbpqcin.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163etjkkzsr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163oxnkouus.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163uiaeisaq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hrnwdhol.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xeiengzh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zdytqwtc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zoeaukiq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vcbyhnpv.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163auzvgiwq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vainyjbh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ssutzlen.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163caflnemh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oddzkzfb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vmletfnj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163bpokfcvq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ztzdbggl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163eqegjwna.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163sswjjnnb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163janqskep.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kqztjuao.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sqbflcjz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tmnvdtsc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fgrivjqj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163kscddhnn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pokjocqd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ccjzzvac.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163qefxciek.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163khfxaqjo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163gbvnssna.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163msnkppad.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xawxyaqb.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wdktifei.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qacwbzml.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163chsfqvxy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163uddmlrvp.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ctuwpjad.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163fhtmotxl.html

Py:   if not s:
来源：http://www.sxryk.cn/163ypzavkua.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163cdgfylma.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163nyakjcih.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163bcsypbaz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vwnrzoeh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163dmyhcikv.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163omzermvt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tykzpuvx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163srsvfwkd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163iajdsxrn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163lmslxjvz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mmfnntid.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vtoxwzdh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163swezbpdo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163pvbrarts.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163sjhjrdxy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163byjgjaav.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163judmhrzs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ljynegue.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ideewibk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vfvlvihb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nvfcovhj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mrnybmjk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vwppjnxy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163dccuvksm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rxrteldi.html

================================================================================
来源：http://www.sxryk.cn/163ltaskubk.html

F. 文件与目录
来源：http://www.sxryk.cn/163nljrqxcx.html

================================================================================
来源：http://www.xuanzx.com/163thacbbya.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hwzekihy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ygxhyeir.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163figfhoyu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xgiljzjp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rtsuyucu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kqynmvaf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163chuyzjxx.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jrkskbpu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163wvoatnae.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163twwiwhjn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bjewbbxp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163raxosdiy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xxgrften.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163imlgkbql.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163apqgkjey.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zaoomnrc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163itxgfnqn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163emwsjeug.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163qywwhwcq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qikpdocm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dyzfxqjf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nhxjalwc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163eygpbbak.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zcyqftkv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sxsuhatj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163trqdujts.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163eyxuguro.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dhzigbwm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163apqyozsk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163tgkeilnl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gifgyovt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hkiwwozb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163nkffyrkt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qeynmcnl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163dgzspfmp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163poebkbhn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tospnvnw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lkywrppb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163yhaiwqry.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163equiiupk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xdyjfesl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cscfiwfb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rfikuoui.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163lgpykzvo.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rjklljaw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vdrowygd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163tuwbydjj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163gkeimarc.html


<!-- 参考信息 -->