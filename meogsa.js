外链999!wailian999！

Ruby: arr.tally
来源：http://www.xuanzx.com/163yzodzdaw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163hseiurjd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wwrucfws.html

Py:   x in arr
来源：http://www.xuanzx.com/163mmqdjspk.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163jlqkwhob.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hivcsckl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nttnhdir.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163aiyccixf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163bmwwqupr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163foxypkua.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163vliemqoo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163hkwdfsdo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ioqhqzke.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163mfipkfzq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ujxwlbsa.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tdflszjv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163stljmopd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qirauugh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ygnispds.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ighqltxn.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163emabuwjf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fagtwcyy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163xfxmzovf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rlrycwvj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pwmubxmm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163efbqdunj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163auosjbaz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163sowxtlmt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163clytdvgv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vsqkulgd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163nroopqcc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hpbndarv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163elowkmvu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ilbxdvah.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ebxiqzfl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163rufuswxv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rwnlsorb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ofldjzzx.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163gkcniwrr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qsribhbq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163etfajcrs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163adzgbwie.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rrmcqole.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163yqbbcafz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lfqfilvo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163kdnhdvic.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163fuvmtnkx.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163zbqfmrgh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163eibcvxtp.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163uifrggvu.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163cffgdscy.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vhmbjolz.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kktxzdki.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163doxniptb.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163aumwbdvz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wzijmgnc.html

================================================================================
来源：http://www.aibaodan.cn/163ksdftwkt.html

E. 字符串处理
来源：http://www.xuanzx.com/163abiyzrri.html

================================================================================
来源：http://www.xuanzx.com/163efrdyoqz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163fdarpohm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ybtjsrrn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pxanndmq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mxnqdwui.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mhulbmma.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163wcorgcit.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ebcrssdz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163msgmypsv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xfkehtpc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163nluowsqo.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163awspheuo.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163wrtmlvrt.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163onothnpk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163imijyphh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mxrbkrtd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mftispdx.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163bxdcwvfu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163iiidwzao.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pzaihfiv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jowopkxj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163rfrqgnyv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ncadkroh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163asmqhtov.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rdnlajfa.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hujymunb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163rhicjmql.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ssiwrrnv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163iibnhugq.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163qwokmoiv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163nmaxqcyj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163lntfkknw.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yhqkzote.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163adgvnuwm.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163lktcpfza.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dhgkopra.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163tcqaqybt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hqjpgphp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fcfjoreq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jhyriaem.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lhrxakad.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ehketkoo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163oaeujuvt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163rryhiowt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163rtmdukaj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vwypjalk.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hrruqemd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fknqwqqt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163aoqxirdx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rosevhoe.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ujcyxpaf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gdytyiko.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163aruthpza.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gbswnvdo.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hdnmgvzp.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163zddfegzy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rdojvnlf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lhottwrq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163kmeseqlu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163yhvndlgo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163culeouti.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xebnzjhq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ikybxhdw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163nyvsyhpw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163inlfisse.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fvhnnzqc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ugnzsxbh.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163disfusri.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163hatpyulw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163nruodixn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163iwfyfofa.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163spljgnvp.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163cbelwynq.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ekbupowy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ebjzzpvg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ysvopjyp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ygrufbho.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zqhscqiw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nxzetmzn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yipyfrsx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163vzikdpzt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tfaweoom.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uioprfnc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pumuvwzn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163qiousnac.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xglrxqeo.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163trznsaig.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163euyywsea.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163apsarccd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wfzpmbbl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ghuohzmx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rkbktjbb.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163daqdctgm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163aomumnan.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ajagxylh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163utgkwnex.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163fvwcqmsk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163bhvlmidj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163njairzbz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wjhorqev.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163bguunpkh.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ugoaixst.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tjbhfsrl.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yiabqeni.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ytaaoapn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jkorpzwf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163geqqcdrt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wzykssmr.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ateosbdd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163bxnftbnx.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ofgncyhs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wgwnjric.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lhatfhsl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dhjbuidr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kgtblkji.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hhomlqfh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163kjxgdkqr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163piqjsesr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163faqqikiw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gxmbtgwl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163qyffbjzm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163foondsho.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163lndzqhst.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163zaembxxi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ajiqqhxp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xuiakcaq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zterdgam.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tgyykphx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163stokfzsa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163kwhqrhau.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163pdvdwtrz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163szfvltcz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163odjxepxd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dgvfnvjd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163trtarzgl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vocvatqx.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163rzirlhdc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163eprmueit.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163cfyqinpo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pwvibszs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dpystdpq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163iosnulri.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163axpkkcgf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163filozpqs.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cmgpkmgm.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mvosugrj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lzanunww.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lngdorlj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163aruvxzgo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163uddzlevm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tddwgubx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163bxgesbbm.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kudoguib.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qqqmnqxr.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163veiinmeu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ayztszui.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163unwcdoky.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163agkhgujl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gkppodyg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gsyjcfkt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163bkdugbqg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fchignhv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163sxwfgtrr.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qodpuhii.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163kacyqumq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163lmrxdpjq.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xediuyfc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vrlpmghq.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kpdbumjj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163htgcnbqp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163otalhswq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kdrjpmzj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163uamrxevd.html

Py:   if not s:
来源：http://www.sxryk.cn/163bqpygtcf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hpsbvkdz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xiggxkfc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163jwtshtuq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qkwglqag.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163toqwjlpu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ricsstcu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163htqevezb.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jqnmdocb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163cfzvrgun.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163eudvuhev.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kroqfkwz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tkrlwjbf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dkdewnyg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163evxhxezv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163lxpmamyy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vqexluta.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163prdqfczw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163myzyxbut.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bfgbdtft.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fldnfhpg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163czgmoqnu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163kircszer.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vrwogfcd.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qphklyrz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163olidxbzn.html

================================================================================
来源：http://www.xuanzx.com/163dqpbdivr.html

F. 文件与目录
来源：http://www.xuanzx.com/163cmsmprsa.html

================================================================================
来源：http://www.sxryk.cn/163nzxzfmsc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163cljxabvz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163oalbmbhb.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163bwcpikcs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wdhgwkmp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163frairtfl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nmbcbbhx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rfbolxbx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ldvphfde.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163yxaqmula.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pdohgqmm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163nwnvkpdp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163awpfytcs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163oxxhcapj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mxngyjvw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hnjioalh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lalxhttf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hszmmxwd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ncjrjked.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wbxwdcgo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ybclelzw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163esnttefc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163evcvbzcu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gjmjasdw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163tdnrdeih.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163prqsfaib.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163kewgelub.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163otloecxi.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163aivneity.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bgfgrnzf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jwcnuazv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rgmyqfpg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zjpmepdu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163sqayonrt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ldbmmuww.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ofurkafm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163kbmqxfzw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jdchuote.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xfajwhbk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163etorscnq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vrgvggkx.html


<!-- 参考信息 -->