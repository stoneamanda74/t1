外链999!wailian999！

[D11] 反转数组
来源：http://www.aibaodan.cn/163ggdxnmmp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163djltudxd.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163njwfotjh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163nnpgvfus.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163zzoeritq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163guhjells.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163euypzhjp.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kghplsxw.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ulxgbftr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ixyjuabu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163invuozhv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163vwlvovjn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rgvpfeee.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163eemcjdsd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163xsakfkzy.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lgtbpaft.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163mysocfhk.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ocrifgkv.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fnrmzsrx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163hglpiiwd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rviideve.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vgonfpmw.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xauhdaxl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163eulizlot.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163msylbmqe.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163htgohbqk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dnnkyrbo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bfueraxp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ziuqgxwj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fnanwdhz.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jbnkymqh.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wqemceuz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163bnshjxqj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163muepvvem.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163etvdyjng.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163nxvsfgcs.html

[D15] 去重
来源：http://www.xuanzx.com/163hjvshtfi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rgtzfwzt.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163dyhcfole.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mwgolqvs.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ssgdctkk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ybbonnpi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lmqkrnhn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163dzluftrk.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ghzbjlie.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163oyesjiyq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163stqztolq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163nnzjaisc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yfhrgmsv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wcmmphog.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pezffcjb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163fxgzxarf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jaexfsoq.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gvgtldxz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163vujbytbq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163eyftkuob.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kypkcmbb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163zpercoyp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163uvzfcbbr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pcfybxjg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wmmnssgx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ohlqcypd.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163cjvaabdf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bfgvuzkc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163lydxqsbf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lqpwphfn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163rsoxceuu.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163nhvxsgqe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163knwuurlo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163etafpfxj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163kfvydbhv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163nrdpgwyf.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zmvdlntz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163cjxqkaih.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163lycajhmw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xrkpotvl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bamicppd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163bguvhdwj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163lyqcdgnb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163mnvjkxai.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163iceevaor.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163dptgvyao.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cvyffggn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163hrgcufsr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wlcbhkks.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qoazjzkp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163atovfnnp.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bdmlqwwk.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163cmberzjv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163iftisijg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163rftzzxeq.html

Py:   x in arr
来源：http://www.sxryk.cn/163yrolichx.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qqbharub.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163muiwwoen.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163seqxuglr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163mequqxvi.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jcrmyesi.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ihlimvcs.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pvedrekb.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163yukvjdlu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jyssgqcy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163gwcybmog.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163zotelyov.html

TS:   [...arr];
来源：http://www.sxryk.cn/163nqlukeer.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163bwbnmfgk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rhhzjmwf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ofaasmrj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163bfkdellx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vbbfemli.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ftecffws.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163szobumvg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zmaswwtk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jdlnzxmr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qhznscdb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wubaicwn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xpjxdhbb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163euvwqxne.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163bryhndup.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163pejhizja.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ojvsgeky.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163sdthghfn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fqkagjbk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163haudibwf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fjkafcdr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fpfqrejw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zolwmuee.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163tdrcbspc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163fwcwglrv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163dpgewnma.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163jqqoxavx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tbkxqvpa.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163oqdhhudl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163hdjsjgpj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zynloflw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163zdtvdcbj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vjfrhfik.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ndbpvruy.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fwrdvcxh.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jjusuzmq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163feldvjqc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hmypimmv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163oxucdgep.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163cmpntisg.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163grcfstla.html

================================================================================
来源：http://www.xuanzx.com/163memozqty.html

E. 字符串处理
来源：http://www.aibaodan.cn/163usqnqzvp.html

================================================================================
来源：http://www.aibaodan.cn/163abqswfpp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163tuzdyqxo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163hsbybmha.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163boknfrrw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fchiuqbz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mkcidulo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163xkwybxiw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163asxmatdd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tvcwqgkk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ufdohziq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mistqlxj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ydzdxeas.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163bdhkoagu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cqdunqib.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bxkcmigx.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163snpfxapg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wjmtsqsk.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163svygqkif.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163cydgvpsx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lqydnweg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tggiyudq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ljncpuub.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163djgonwgh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qasmfzfx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163mruzasxk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163clelpujc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163sooqmbsl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yrhrupsn.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163fwclexir.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wpmjtoal.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163tdpxldse.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163vwpschxn.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xmfagakc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fhrjyujk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163nyhvoxoz.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163acbyzslj.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163xtwrseel.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163rnqeitjj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lerjfbur.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163agcgqxru.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jmujkzmx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163lwexpsrs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lbqatogo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163tvimtozv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163kpspuktj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163owicdxvy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mjnrwhyo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fsxdggcu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163qodqykyy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ianmlugx.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mjkdojdh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ilourglw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163yttggiii.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163kvsqfglb.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163jshbthiq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163miwlhrdf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ritobwrv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163tusuammo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xlkpxuwo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gktapvsi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ojkidcmj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163lplgxzjl.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163kjvjahxj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jnluenws.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163cwvshrdh.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163btocsdjp.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mtmuqzth.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ngmngdva.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163knvzyrbp.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vqkcwpsv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ehjbdyty.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163vmemyjmx.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163qvxvqnkc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163luktuycw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gepbsxaj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163tmnqmjgm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163slldojpm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zlyomsvk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163eilthbit.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bnxbmkyw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163purffrmn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163kmadfudx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163buncyhkf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163fubdhukw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ryfshreb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bcdftufz.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163elypysih.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163fgwcdtpn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gsumjuxy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163eskuihcy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bowzthfs.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163xawttriy.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163soghyzaj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163fxviouks.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163apufflwj.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163whcodbib.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163mtjijgsr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vpluqwei.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ayhuhpkb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fxhpvoha.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jkiicecr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ephopuey.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163pfdrurey.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wpuwjwkc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yyiylcmi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163oprfcpmm.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zahmkqbi.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163piqshlof.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163gednunfc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nktdtbtg.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mxqdxmuw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ldleayzb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zzprbsvr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mwkvmryg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163lltveaat.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163devcrzrp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163qschgewd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163yoqydjmn.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163lnawxdfr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163pqxhhxnu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bjdxoijv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163blbwdftg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vsoljykc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nnhjawio.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163agddcjyy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ywjgsdpp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163vwwafsul.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163scuusboe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163avhkratg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hgzvpkdh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163wntwpowf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vcfuvizi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163dtganylm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rzbkkrho.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fcwxvwmu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ijjwuxdo.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hjzchext.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cqfvnqfc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jjnxqtiq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163lnsfmqqp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163grrcnngl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163rkchcqja.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163kvkmedwt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163rzttqeeu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tcfzulie.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163raxsbwph.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pjmjmqho.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163eoebtczc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163voabpbwz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kkndsxav.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163aduwdfzv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hweyztbj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163yrvfprmi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cvzavszb.html


<!-- 参考信息 -->