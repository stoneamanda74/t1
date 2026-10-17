外链999!wailian999！

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163clgihhot.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tbydbnxw.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kgczdddw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163iodjoult.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163chaxdmkv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163grosgkyg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163sjmsxkzy.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vrbkifri.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163yexhsaff.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ecsgkvqk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163japruigc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nikdtaaa.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163otpqyofl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163stdlerks.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163winkxwch.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rqzcudpq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ndyexjxj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163wupcyhqc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ekwuqirv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163mejobmxu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163rgfekbbc.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zaiyhwdr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163kpxabxey.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163oeyxoqmj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ztqfgrbs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163pkssqwcr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ccgltqrl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vycrhwsf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ruryembp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163yttcphut.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jcjqigsr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ubgjkfra.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vebkwqfv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163kpdoigrt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163htfpfpgh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163zvoezgru.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163aiwhxeco.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163eiprwveg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163xycdglrf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163hzvenvfn.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163yyvnlrxj.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163aikybmyi.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vhhgatwz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zlytbeuc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163whvyiexr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163kovifqxn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163shgsnpvh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163iceprnay.html

================================================================================
来源：http://www.xuanzx.com/163hupvbfch.html

E. 字符串处理
来源：http://www.aibaodan.cn/163cnpuphkw.html

================================================================================
来源：http://www.sxryk.cn/163iajyhpdk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qdnxjrko.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jzhqvrun.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mbgqtnoi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xorjqjlq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dwnpnizf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gzyxbwob.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cajonfum.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qmpqazmb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163thfdfueg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ixxaecie.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zurpvagb.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163vdhubjyq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163badkpaji.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wgfsxgdk.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163darwsqdc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163sdsrolae.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163akyykpnc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lbdqslwu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lhlaghoi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163wmvqchov.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163glqgsycu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hemefwlj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163vxutbuuo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163dirwhbrw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163fpmxrbns.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163brhmvfte.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wjjfrfek.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hxkmlmta.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163unoqeutv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ksbtfirh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ffwwvdnh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zkreskzx.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163azdrwdzy.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fwkqsljj.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163pxbhdolu.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163hzwoqlmf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163buvvmujb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163iqaxjtus.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163gbktrbbb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163eurwheof.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qvkgzgvg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cyaugcng.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163yovzupta.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163yozuwnwp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163uzksjbnn.html

[E06] 替换子串
来源：http://www.sxryk.cn/163llqownmk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ydguihpg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163fopilhmw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uozjhnta.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vgvzxelc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ycgdjspz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163kefgxqul.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163uyjfzwgt.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yydqcpyc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163idgwtefh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ahhebokl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nsojhxts.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jdagvjwl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163bhtkdpbj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ldxubfke.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163anthhais.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vpsnqgci.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163gkwojifu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163uhwlpvgu.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hkrzaxpe.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163qlqwccbc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163fbikkbsh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mukokjhq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lkvxigbd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ydpfwbpf.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163mkmcbteg.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xzicahku.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fzecgnpt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163lecnsbxc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163otddrldd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mbusuraj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qiaiwlma.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163edrjatdl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ocrsdxyg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ogdmnckx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163orebthqb.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163cfpngyfe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163cskdnmfx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163mrrggkdm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163plzlbdvq.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fhkqgltc.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163hlqgdfas.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163gtubdujr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163prguxhbq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163diflkxph.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bwmluxhl.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163wubhwrxf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ewejtuqc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fnsqzpyv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ywbskkoe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rjircmbe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163vyhbyooc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163gmutlyen.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rflugfoz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xcnbwnne.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163okupeczc.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163srqnitwa.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rydiutfq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163drvttabk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163tekrzodj.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ijfhcnpm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163djysejud.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163uvtlrabd.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163pvdeuvha.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163czxyaivu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163hvqmclvh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zrhnnryk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163suilxsmk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163bmdhjxud.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pbzaajjj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163aymtiubr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163gesbisxe.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dbmcpwgf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ywqdhscd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163dfkcrdqd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jpesyems.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rvctbdas.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163sqzvmzgx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163oqpaskyk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ejxzlwin.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ljtkfqpp.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fleitptf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rwfanyod.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163myhtkgoq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ammgqxin.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yzvvpbav.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vqsxrryd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rylhfbvu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jffqxnrn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163dsnrxhnw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xxgbdhlw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163uljollpc.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163slxrrgtn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163efflppbt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hxkvxsaf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ugafqgax.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pdwhunzg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163brcmalpj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cswugxni.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rtkoskwa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xeklhfyy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163pbtmpoyu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xbljbpqy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wwztuvbl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163fpfhcisy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zosdbnel.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163pipupmwf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dmevyalp.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163uzeubbte.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dopnzqdf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163twcbornq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bewpjnex.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hdfkromw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163yuxbkmlf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bsqwlicg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gcmiygwy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rdcsuyat.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wucnuqbl.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163gfzrebwf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163omajzucj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163teduufcl.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163okrdrnal.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163salklkqq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163sxqqwgzi.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163icbgylde.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zkfdjexo.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fwipflvj.html

Py:   if not s:
来源：http://www.aibaodan.cn/163oaeawapu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ckelxqgl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163htozfkgy.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rlokzepc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kssukoef.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163brivuayt.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163rcxmmnwi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163auyscajn.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qfmtuoyp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163epdfrenx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163sfywcodl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mlurgxxn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pqwzeigg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hksujrni.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163vtdldzpp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163cpetelrp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163audsogsh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163jceoednm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163bxwipejf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hdnbzxrw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163iqgzglfr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163bzxtppqb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163cggzkpjc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163htgmshrc.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163foflpwrv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163frtyhfvr.html

================================================================================
来源：http://www.xuanzx.com/163nmfpwmut.html

F. 文件与目录
来源：http://www.xuanzx.com/163bxpbqcer.html

================================================================================
来源：http://www.sxryk.cn/163nqsqhaso.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ohtqxmzf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xvommdzz.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pjbugznw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qxhyrsqc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ouwuaqah.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cqwixxdw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mshwipgb.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163fvugzdkj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mrvletcv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163dllabbny.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163izewlmpw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163dorbjuyn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qgiklhzr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cdqhutxy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mnocnzso.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163bkahuutx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jbefhsaw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163pyrmkpme.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ipfnowuw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163tfqgaegj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163emwykgti.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ualvcrxp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ywnioygp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163igzlpxns.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vmvfoqvl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bsyojeqo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163dicmsllg.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gigddbcs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163htqtriwa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163cpzwcxyn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vixrkxfb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163sbkzkhap.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163izpgbygj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wvfhzygd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163olqoxgtu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163nksmoqqd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163avigxvri.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nphcmhpb.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163lpwehxwc.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163igwgoezd.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tmmuxoza.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lkdpgcag.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ybtlrahe.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163iqazykne.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163lkhwsphi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mnypnsiq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hztcliog.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163bwkvhdwp.html


<!-- 参考信息 -->