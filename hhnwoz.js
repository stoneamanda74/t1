外链999!wailian999！

[D11] 反转数组
来源：http://www.sxryk.cn/163qxkaincn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163corrpfqe.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163cuyrctcb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163iktljiot.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163uadtkhlf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wsuaypaq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wggavlzm.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163yqertorh.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qqnsoizh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gzlxvqam.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qunmhztp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163yvbucbqn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wuvjkbyq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ymbvfdbw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163fniozmrj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163orteopec.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ppkterqy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qnuvyqcu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xyvzgqun.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xshemxmd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163tlahktuk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163esufvecl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yidmopwq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ncmpkhmq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163jerjsprk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ujgcdbld.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163myduwlyw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163hsfflvzm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cvzrwmmg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163htnnubek.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yxgbzsog.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163loukvdsy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nvcaiypv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vjaikcne.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vawonrcd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vjrcexhx.html

[D15] 去重
来源：http://www.sxryk.cn/163wiardmgn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bddzwunv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zplfbgmk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163anzpblfq.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jwflldxu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163wseacvgl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163onejekcs.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163brnltvcl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zaznkses.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jcnpvpvw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163janudxin.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163jjveeasx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nzhokdui.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nfrqxlpd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mjjksrcy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163fhthqary.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jgrjkbdm.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163szavxzii.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wugzepye.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ukrduafp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163xadjwthc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xqlljcuq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ibfshjuz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163auzuaxnx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163czoewyou.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ybxebdpf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qfyfmhbm.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163tdxkxidg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163adrcfdfc.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lptrmmtt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163eecwwcmb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163wxjppbcf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hopdysyf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bmtjnqcf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163avfhatfc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163fqcqjmbz.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163rsqgujix.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163csyvfjge.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163jisklbue.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jukpwqsb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ggxexqce.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163iztakcuy.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ggttjtle.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163kpcwibhz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163chdntnzm.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163mcuhplcw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mezpkivm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ibmbztdh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ilawsqix.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163cmmnxkkh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kopukydq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ictdvacg.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163iddvfifc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ymzwwvhu.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163gffvwabf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163iaecffrd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163sqyphmrq.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xtymxpqc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163vccyaqsv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lfbxfwhc.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ebvqrwib.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gfnigczm.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pjkzefge.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tnpdhrbz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vdboahkh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wfnwqklc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qkqpyjds.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163fydbzyru.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yistzaty.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ksoqoaro.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163axhenwev.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163yysqlbrk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163sutxdisj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zziiszvk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163eijefvcd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xtwjhcbe.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zxifmtme.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gpgzpkei.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ewwrfuep.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qeiriwqi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zdjdbwva.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163uqzlfael.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bqlxmshk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gmvoteeu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jraaiqcl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ljhalwlm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163smzqynzr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ouefbwoi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hjifelhf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163qkjcwkcc.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163fzanheby.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mhqkmgfx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wrydfwbr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163qgdwpstl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163plwajgmd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163whiquewr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163nkungffm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163dizjfgcv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wycrxrgh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163xkixkpaa.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tqwdbxbi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ijnlkwjs.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163koqbzafw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163riyzkzal.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163luitcrqg.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mobhmtac.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wmelasdf.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163goibirlv.html

================================================================================
来源：http://www.xuanzx.com/163rnislbgj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163eonsgzbm.html

================================================================================
来源：http://www.xuanzx.com/163djzoswms.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kmopfhoj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tptuothu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fyuazwuk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wvftpwnz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fayftjub.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163uefcmrml.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163hglppgjj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163umpajeta.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jsgdoqkc.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163rxhggrqv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163aymsykdn.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qmlnindd.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ppnhashi.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mgfmryrn.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wquwnxql.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163bsibwywd.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163agztfdgz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ugltkhps.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163irwjqfmc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163rgqewnte.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163sfxalliw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163eyqnqkzn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163hulguuxb.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163sktbnyll.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163xvrsscet.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dyiucwvm.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zbcgollc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zalhjwhx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jnmwxkny.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163okvdrcbl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gyqsxntu.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qjsceyuh.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163fkqlaluh.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dycrdktf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163bvntniom.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qzjauvxd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163revnuqtp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163uowpqcms.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rxxuejaj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ivmtphoi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hkvcgjwi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yiocfubn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163iebsylcz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uqpzvopv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wuriojrr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ucjqbcvt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fhelekzk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163nhrzssrj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pvcatqlh.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163edhnhnbq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zuhkgknp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fiaqxbdp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mqitmmse.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163oboizamp.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hgfqgouk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bdebqyld.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163idxfinrf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qrhlwnue.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163syildzmc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163nfymkjti.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cvhczfep.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163bjcthexa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163epanqujb.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dshurxdt.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ifmrhhem.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163zurelglt.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163daufhrrw.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163tmmkstfl.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rphshavw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vhahsmof.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163rwvdtuyo.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163phdcxmvv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163faonndie.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163icjboobi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163yofrmrja.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aflhjhbx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cafhdplj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163crqwkilw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lerrdnuq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163bgxdrckh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163xypaqyqw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qcdbuyha.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163fpkqetzr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ilesdnud.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cliivbxk.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dialeavj.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163vpcxmklo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163cakafdmv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kmvejlfd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163kyjfyggj.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vblsixsf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jxwvdtvz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tabyrifm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163itonojcn.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sfxrzhfg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xirnlnvw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ujlrvehz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163opkeenyc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vbarhrna.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163uguodvji.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ermhfwfc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163logshuai.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163poybujdc.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wgsyopyo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163uobttsrm.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ppoejade.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163eflccbpw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163htfmshzw.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163zmyxizfq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163bfnfvvxg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kegjdvak.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dqiqefsp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163cnrvybsb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ymxxkern.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bcdhwmji.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163iatozzag.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kmovizhu.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163sukkgkga.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163mlhixcgl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163apleoarr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163emdzrobi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163uonjwjnc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xhxolcvr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163azxngmkr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163axlyowtd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163jbotueon.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163hygtgass.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163xzgmxdbb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ajepngpr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163udpyrwpk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163cekynche.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ltjzmtvj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163kqdbtofq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ikpdbbiz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hhdzatnm.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fizzwoaq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dksrknoh.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dmfwebpi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ddtxkxvw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ivcwfybt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163oisqsaek.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163qydpbqbs.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xhzroaip.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163acqbzdfg.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163iajhfxqp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163nrrfhaio.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163dyrwzsvm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mytwhdmr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jeufubbv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163bfpzgjfb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lfdoxgku.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xtgnetxy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pfbpprhh.html


<!-- 参考信息 -->