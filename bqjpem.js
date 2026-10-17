外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163bjdeztkw.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jqpwobff.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163detsysrm.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mhddulrt.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163bnrgtdgz.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xodvdzos.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163txqvnnvf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ebkvoeal.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fjrjdnmw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qwitwlmr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163rehxdcmv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xtjkwjps.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163iwqkeoin.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kbxyaqwt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163feqkucxd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kossrauq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163khjdugnv.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pwxhxhzf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dmkvynyt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163isafxoua.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qwumtvcp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ihmisoxa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qblbxtff.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163idpomeyt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cqqkidtz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ruynduzz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zftkrrbb.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uloiqbib.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163vnhiumpw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tezhmmhy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fnxlikmd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163yiyvwcra.html

[D15] 去重
来源：http://www.sxryk.cn/163qetraqes.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gcekxvjx.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163fbkgezox.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jkikyvtw.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vqsiiyet.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hdtxiagz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vrfhifvw.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163exuwdwyd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163fauvtcyd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ucqkmhdd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163opqbviuu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163chirilfd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bbkcvrlj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pcokymcp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163aprglvtd.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rextkbfz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163frvvfedx.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163zowmurbq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163dhvjpmcs.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163fbufzhac.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163rvjtamny.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163deqcjise.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163csgsxxdk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163puflppjv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ntlpjahc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163diffycft.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163rpqfzwhr.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vrbmocjl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tsjurnte.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kqvdheul.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ghkhjbey.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mvmeqapa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163vjhgkjgx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ewqtpwtk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163mxixxvja.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163esgdzlki.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163rhbbbsvy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163pqlrwyhi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mdfflbwd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163plyalwfw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163iorclkpr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cdzgjvdf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163nzljjhqe.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163dgpskmwd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ckonitkb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xyobkhsc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zeecdzth.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ucfumhqp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gxkfzovi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yjckysgs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163nswrhsvq.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163woukumwf.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jenldgau.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rksuisrs.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ryufzglq.html

Py:   x in arr
来源：http://www.sxryk.cn/163nggcpqtx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163gdgsnbbw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163grmuipxb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163jmndlwtg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163psahwnzl.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hucvsuni.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163wifxriqz.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ypvjgjng.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163vywjnohg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163nfnxbclq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tjikmghe.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qtujdcfx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qkxovvyu.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ycxncwxz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163chtxjbbp.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163odtqtonq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163rnqrpjvz.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163eatnmdzg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ebthogtt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gdhuiuve.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uqqqohsm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uerirgcn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ihiehnnw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tytemjty.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163uzrvjrfa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hynyqhho.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zrhtmyvi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163bmvqjmpg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163dmavhjzh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163futhbbry.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qbxdfvsr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163upqfagso.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163onuakyfv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vrtpakcj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hyegnwtj.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163hmffbmco.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jfphlsbx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163dzetjfcy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163tedmtuxz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163fjdrlxgy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163vpztwofy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163gxibglxu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xnfvchvh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163viilpogg.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163vkyvfokm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ydztnekj.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jhoeelbv.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163imxltvkh.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yitfbibg.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vmzomtze.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163sbyqrtsy.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163bojypbkr.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163chdmvnhe.html

================================================================================
来源：http://www.aibaodan.cn/163rtynaswg.html

E. 字符串处理
来源：http://www.sxryk.cn/163hxbkuhkh.html

================================================================================
来源：http://www.aibaodan.cn/163zlnlnxbl.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zwejvtqy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vxombdzi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vsqwnusm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hniddjjj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wclnbsgl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kxwcumgp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ownemlas.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163iwcjrfym.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163smxkerwh.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ltcfdjlq.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163oryvtuej.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163cdhuqfta.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gxrfrllh.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163fhdgdcyg.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163tlmfgptb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pfpzbdyz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163kjdhvxvo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163oulsrpyg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163uhljocvl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lmaegchz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jvptjcol.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163mtnfgyum.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163uznkaenl.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mahmvglh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ppalpytb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163udthmtym.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163cdhznbwf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163yopzskur.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xfdatizk.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163fjqvsdpv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163spfwmxri.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163svfanylf.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163fcgngetk.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163nhohxees.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163wvbvybby.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rflpmuqq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hguznbtp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163emvffnvu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xxllfiwe.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163goihieut.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163lttiepql.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163khausczl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163fdyohmgc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163sswwcsyw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163igipmzfn.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163zdncwkgp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dwnrwowv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163qmrpbmqb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ggcjsgam.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qakpvjpu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fwjacska.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gtokduhe.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163djcosxhj.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163guzjmngn.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163pwbagipf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ecrmdrjr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qjxaclij.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163gbrqtewl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163tssfixbs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jkqitvqj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163hpthynbj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ekiwcogy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ytwtmynf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163grasoomr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gtqugxuw.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wtlhkluh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163byruuztm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163vrbxvdkk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163duyizujn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bvntzbpl.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163fgavlmgv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163bqpgkktw.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163bfezckye.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rifextfc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163iumwrlvf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tqzqwfmt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jlzbpgms.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ldyiphki.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ywrpatqb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163omnavazd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163zobmvvkr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rpqbnvdr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163snrtcdao.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rkhxldid.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tcjihneo.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bspkojtu.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163mlttqiuw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163fbbpquzk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hpzoepgi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ivlalgrc.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jcsgixoe.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ongjzdgu.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163jcoehdul.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vttgzgdb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163whhkljwq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hfftlhld.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163nkvszmet.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163aoridqpm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pqepuxut.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xpqrqgpj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163isgxrnot.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163bhfwwmkr.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163scgskmdi.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yvkljxdm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rphyolyw.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cdwdspov.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163shtnzzeu.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lbrplqqc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163zoicugcy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kxdjceny.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wtdbhyho.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fnrmudbp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hmprapdx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163cuipnknr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163sojuliar.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ecsjkjpe.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163uhogdevz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jbvblqec.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163qiktgmsv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163eiccfxfr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163yyxbhamw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163lmaisnzn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163fjwykznb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163icsrezld.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hompowpv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163kftpfmgj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163uxwawyvv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ghxggqlz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jvdvmvmj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zkzmchrm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ecblvufz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163mrykezje.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kmskkcty.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163sllavfpk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ebmalpjv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163uzqscmjn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163miwdmlue.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163sjgamgwb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163flbfbrfl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yvbfwgcz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163togcuefw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163smjucbxz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qncvplsm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163riwtjzte.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163sxhwsuok.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163qhmgrkkr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163srfcofnw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dkdlpevg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uqbxcimj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163reqgdwav.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xemdbpfn.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163snhyhtvd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163rbmiisla.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163nzbqshtn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mihwawnt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vycvutdf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xaebjcjb.html


<!-- 参考信息 -->