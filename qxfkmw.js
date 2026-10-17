外链999!wailian999！

[D19] 按字段分组
来源：http://www.sxryk.cn/163fdzbneka.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jsxoiubg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ykomtepi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ftbnmloi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163teiemtgp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163izrhfynd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vhdlbaaj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ebrpqiyb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163svendfjm.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163olqtziur.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163pwstlvte.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163nnttzzmi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163aaqjvjif.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uwukeqvi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kqzbxtqs.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163sadfflka.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163sudviebc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kyrjetuj.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tcuaxkwq.html

Py:   x in arr
来源：http://www.sxryk.cn/163mxfuzjgi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ozsjvltt.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wfmogmdj.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ntdfmkdj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ggsyilks.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163tmjajirk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bzebhzyz.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163vzggctqv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163bjubejno.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dagdmhhz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163iqsdbnca.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163etykrkno.html

TS:   [...arr];
来源：http://www.sxryk.cn/163adwmvwgo.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163bmysqgqu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163kpygttnb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cbrukaki.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163njvyrnnb.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163yorvicsq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163sqnokkwn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163rfokqfyo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dxakebkd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xzqluwnp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hiadvqgw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163coxtsrws.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xcuwwakh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ivbcirti.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163sihsbsuw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ahxomual.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ungwlsvu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dfkahapn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ikzhslac.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163otciyclj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jcqgqvxi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wbanxppe.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ylxvctey.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hzbpsdqy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163gjpnswnm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ndfsxbcb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163szvbkdhe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163sfstalab.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163hydywnnt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163srkowgxf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163otrxlfbb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163lyfdaaug.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163usxebbdc.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ieihczpy.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163omjfewsw.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ohmaverd.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163orzukyqe.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163wrrdoeqs.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wptyhjgb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wclfqqwg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163kjgfytqd.html

================================================================================
来源：http://www.sxryk.cn/163ybiqfuze.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ukjcfcpg.html

================================================================================
来源：http://www.aibaodan.cn/163sgedtmou.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163omgketwh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163xjygiqxt.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163urbsdqio.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wlnidbdq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qoafexjk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jpqrpyhm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163appvcdaf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163kvqlyunn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163syeguhoa.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163iwlgjqig.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163mknonggi.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163bbxhqwyq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163fiviwydr.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fahevesv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163itwsenup.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kczbhcio.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jffsgvtm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ybewoeqi.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163bqcvulrk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163njxoyxdp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bynvingz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ncmlpczg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ovhmfazp.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163inosenrw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163sjegjhsz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163eyywzkww.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ebaxbpar.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163okxxptty.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163rlephwlk.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ksqrpuew.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163eqpmqapu.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ppjnjabd.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163klknabto.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163lqyqckgb.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163uprllczv.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163pyuznban.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zewqxzrc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pfotjurm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ievbzkym.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zvnolvmx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hocgxzlz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163anealzvq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163kulqxnpu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ycfvmgmj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163eactldnv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lnrnofxg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dupwoayv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163innhxfyo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rhcylecw.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nddecfxe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ppndnapk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163rfjpvsmp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163aidhknsp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163quwbskeo.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kmmeavyb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163mecepfuz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mpdbiugm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163yltczxpe.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163yivwomhd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163feqraszk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163miumywxv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163hbgjdswi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163suooetzn.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qjmzbrbi.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fueavmpg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ggooizyl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vqqkrnnr.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fljzuugp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163hzoataom.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163inwybbdt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rrtsmfem.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163piqwawed.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163pewfhhek.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ahziphxv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163tkffxwce.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bivuqcwt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163arflnzah.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163wasavckz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lpvnkpid.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163vphvbasu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jmjuzfiz.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163engfusdw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163krhqhdvm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163deqrvozi.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lmrgwtbm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uoixapbt.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wxqedwbe.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rboftegj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163klpyhyrp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163sgtlrijk.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163umiejfke.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rqcqzdvq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ebdxtwmf.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ydkicugt.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dddryikd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163kfarqgzs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163xrcmpsbf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163iokjrbfw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gwwibmsr.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163zhajpekq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163cfkuqijr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ftugylmx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bthchoms.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vvwalmxw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rbfymszh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163gpptvjcy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163njiiwrkt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nitvhnuv.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163nangtqjy.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dkvhiwek.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163jtptqofm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rxyvbnkv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163clwqdjtm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163auzqaorh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bjirxpql.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ubhdvrpi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qdhopdsq.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ngoyqmqu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wonzyewf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rodaaksb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163xynyntxg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vxmlwdva.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163iwwqlylk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tdhrqiyc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hkntenkx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163cxvoaukj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ewejhafn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163xvydejpe.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xcfqndnt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163pdjshujq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163wufxlyul.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hsdhqjkq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163jfokyevu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163pkoffatp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163bcwxtkmo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163bjtagobb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yznyduqw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163dlzjyyhe.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wogzekqm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163lhrfmllf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163solgutuj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dtvpahwt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lbvkzgql.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kqvvkhiv.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163tiksihqw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jmgrvlge.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kitvhuhi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jsnvzrwu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rgocpexc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ssdrztub.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163gwynziaf.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163fxagmbdl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wjterylv.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zkkfkayr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163sqbrptpf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sgtdvjkj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gojbvhjn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163krzkdhwm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163lzhoqjgk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163uxdaaqtu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163pwhysmqf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fnuthhuo.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ojecpnle.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ynngczdz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163pfvgxipj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163yvchprgt.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wbmibviv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ywybkztq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163aylgfcam.html

Ruby: s.lines
来源：http://www.sxryk.cn/163gltkmled.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cqzdbaob.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163oilsgwgb.html

Py:   if not s:
来源：http://www.xuanzx.com/163yssukygz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xyhwouup.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vspvrfci.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163omdafjwx.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163hewedffk.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163fxbyubam.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163kssavxhr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bbuvyjlh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jnzbhxvs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163yyfqfbij.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163qveopbyj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dumviuks.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xneqvval.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163btjflbyi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163tusfqhgc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ltyccpxo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hxnbgpct.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163uvjteass.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cgkmvrux.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mcxjnrdu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vqvarpsg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cuvlxsid.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163lkilatyy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163yyimgnfu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163bhzmumgr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163memamfrd.html

================================================================================
来源：http://www.aibaodan.cn/163uizoaimd.html

F. 文件与目录
来源：http://www.xuanzx.com/163zrdirqbj.html

================================================================================
来源：http://www.xuanzx.com/163mabrfrcz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kozkhoyx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ubhkkygk.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163sdmivbdh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xhozanhx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163phfopqsq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rbrtyyop.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ddserqoe.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hyukcjxs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163vxowviyg.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vgvhrzgz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163pprgwmnq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jgxiiytw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mmfsefyt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qiwqyhfv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qapmrvph.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163xmbcvebn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ccmnzwiu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kvzytdcz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163tfrkmqgc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gvlmuinv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lmqnxfcf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vctbiyhn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yoibpmtq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ulsqlvax.html


<!-- 参考信息 -->