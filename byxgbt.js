外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rfvhryhj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163jmzcpjff.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163xsjnugpq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163toxritjs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163aapplqha.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163gegcuytu.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163smhzguiw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163cglzgwtr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kctzrszr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rxijabhf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hlsqhnkv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ywnlvljk.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dekhhpii.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163cjllcbhp.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163endqrlzk.html

Py:   x in arr
来源：http://www.sxryk.cn/163mjnnliit.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bkvrktcl.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oufjaiyj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zadiumfj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wlgktjmc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ruoqmays.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zvspqtmp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jlzhysmo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qcumdzgl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163flazixzh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ycohftdx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ayhltmfy.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vtqfhomu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163abhjrrqs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xtfpvasb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163iozawkoe.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jfngdafq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zxrtzdfq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163dbxebecq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163zoufkvcq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nnopzekj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163couajsbb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163grsadlpp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zwzarwqe.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163pgjgrehi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jbpahriz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163aqkeuoib.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163mkuqxwbm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163esndkhvx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163uyojpnqw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tjjmdwwc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163eatuuucl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ujlrtzvj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163uvnhqpyu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163igpbbtoh.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ufxvfwov.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ainqvpnv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163oxfjvouh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163xjdrkhms.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163kqrfllha.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163onhfkvgx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zemsahvq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163gkgpljwf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163pojzcamm.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163jfzpcwtm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jsucnxek.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zalmxakz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ofauilcx.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dvjauyfc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ghbsamkt.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163avgbuucy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163cfmoqeoc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tioeocqy.html

================================================================================
来源：http://www.sxryk.cn/163tcdhtssq.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vyphlipp.html

================================================================================
来源：http://www.sxryk.cn/163ovuulzhj.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163olnwrfxs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ubmcigld.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ttxhgitt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yeqtwcgs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qzcqpurk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mhthxued.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qaihiwnk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gkgpxffe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163apprpvsh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163kvmiyodp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163amqcfgfm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163iqzuxiah.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163yjpwjpgv.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mzwrlcer.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163wgbxzjrr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qzyrcdgn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lzioryqp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163trilysdq.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163tmkzuhdj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zbkbgncu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163kplqjdyw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qdnungnc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163iyymsqzm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ptoiwlwx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163cpmhnbjg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jteiuxwp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qavbnntx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163aplysssb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gjcmvcgm.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163higuzfdi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163geoifkcu.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163tdtdncxp.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xuhbduyz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jfebzacm.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163phqwucdj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fdrpaqxt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163cklrgfyq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163rxzznvxp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163twsyfwgo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mgcywxir.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qltvbmkd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163iljhgwqy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163iafrfgkr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vxtehaib.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163pjvzoetn.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tpnsmegi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163erzvpjma.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xrppwrqn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gzumsppn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163slrnvkuv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sgsuqbni.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163eadqbarg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gvhjxgub.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pjmvoovf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kporlqtd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163enlgtdrc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163kqpruyoe.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163oiofvhbm.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163tjqbpxxv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mspbyjme.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163bihwcpyu.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163atnssvfx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zbtlykhz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lfubxftd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pautqocd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fybnsgvt.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uttnqfop.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163bgrgooln.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163xcztxihz.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163yyppripm.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mfmpeuxb.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163sttlimjp.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163woxkguok.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ylhylzqt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163netdgluh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zgkcrdkq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163msknxlff.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xurzrrho.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gxcxezii.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163bbjlfdxg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ntnabfeh.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163osssaxrm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zftvonby.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qatrbytg.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rwmjfrzc.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ezkwhqal.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vfbnpknj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163yamrwmmf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zgcejhks.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wxouuycv.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zhjexflx.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163mqylfycl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jzszqvpr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vsdpfocv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mmalsoyy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yuggwzbr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163dgpbznyl.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yzvzscur.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jgcvmzgq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xnxwsfmb.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163tdvyymll.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163shfkcjcg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zrkovppz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wnsnvkka.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163umvxzyla.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163rcnphymh.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ishqbztf.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163atzlptpy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kmvytxue.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163geixxcpe.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kqyqdqoh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zoevobnj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wvopfkme.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wpqcuopo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dyelbyci.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rahhpwxj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163qlvcmszt.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zcerquei.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cutdsfpm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rrfwsqoh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qgzuhnyu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163xvvfmivb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jsvngzrp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163myxxrdnn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163mucqydko.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163nlvlirix.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jftuxxjd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163wexgoeww.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163yeapwkmf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zomxzopj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163cbcyuahz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gojdtshd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zxznmays.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163erpgpcbe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163rsehjqnd.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163qagwpfrv.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jomjrekd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163kfeukqtr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gfgbhedw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ajlhubac.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163otooqnol.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163aumwnnpx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ubixcjgh.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163oijamilh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ncpdkiqg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qppqsqzo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mbxasyff.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wgylzeai.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163syukwddt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163xguhteyn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nmnrmlds.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lzahjimf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163firqyheq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163josodtii.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163pndkkncy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163uolqeaxe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hqrvcphx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xxcshtdr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163bzjduvev.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163inezeftf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fvljgoqb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rltlquux.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jvkcxiec.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qhrvhzvg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163zkqocpjr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lispaits.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jxaafwiv.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ldfmttum.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163olgdzrid.html

Ruby: s.lines
来源：http://www.sxryk.cn/163podblppb.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163tlmcwzyq.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163veysbbva.html

Py:   if not s:
来源：http://www.aibaodan.cn/163puswmpct.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163tcxfjtui.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163sxwyotvv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ibiwjjab.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tvzbnsxn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163crxlnyvb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xwwqomxk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163uckzkdmn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163amhcsptr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mvjhomfy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163wnxiqvax.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163thsvwnep.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vjdoibis.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163upowrhuo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ivblxnlu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163higjuvng.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bapvkikh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163mfdizpsb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jsgaugmd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ofujsndu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hanccdia.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sknacmff.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dzobqimg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163sclndqpe.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jncpbnxd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163vocepilf.html

================================================================================
来源：http://www.xuanzx.com/163krznhtrk.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zdplzygs.html

================================================================================
来源：http://www.sxryk.cn/163ifbnusbe.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163tfkecosc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163icperexo.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163poopwldd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qrfleubt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163leovarhk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ylxlhgbc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163waewohzz.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163kptcgzpw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163eovzejnl.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163kcbcxqyb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163voyyfuzx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163icnhlmjs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nlsdymxv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nhguuwfz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pbyyaufc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163wsovuqev.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hdcrnveg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163fvvuhkxl.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163aunxjjgd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163setsjsrd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163iclvrwpw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ridsrgdf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lsmiades.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ftlshost.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xkzeaiwq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ackcmuyr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163fdhubwzi.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dsrayyul.html


<!-- 参考信息 -->