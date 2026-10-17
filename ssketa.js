外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bmiiciza.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zjnbjamc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zgqlrrmz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zyuaamoc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wqlvedzr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dcrqnhjs.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uzpcpirm.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qyfkoujb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zovrawkb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bhshwxxz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gkhflumz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163rarlxqmh.html

[D15] 去重
来源：http://www.aibaodan.cn/163zbazixxi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xmuitkfn.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hvkzngho.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jlmkrgfw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jfttucvp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kznvchoh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qwwakfph.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163inxllkvb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163llklndxk.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163djqhuspg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163hlzbqkvs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163htskvjky.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hdwfqejj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fqumqoct.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kqjpoemu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163bugdyrrm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rlncaanc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xpvmftea.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jcgtreab.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163faijhvrn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163atwvegxg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163gbejhjau.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163fwmlzxpa.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lpydxpol.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ggiygkfu.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gqhxbfxw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163xckiyjlb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qgraaurd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vbczdeat.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wozfqfev.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163icbiydcr.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ebjuoihl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rbtehmpg.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mhqbmszk.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tulrowom.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163awtxhzub.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ninsxovd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163snnrbith.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lmrkowws.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rfvkmeuk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gglwzxmz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hohubbdu.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zkugvwln.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163azdqirrp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bpjgcnip.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163spaizcjl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163huobkuqh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163idmoalhi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ljwgtyfq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hjyxdzyp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jkyxudmq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163odfxwwuu.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163jvoyvzdq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vgrsvawy.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163sdddhbzd.html

Py:   x in arr
来源：http://www.sxryk.cn/163dspmlwco.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163btjccorx.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hxazdhbh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bwfdwayl.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mjpmnima.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rlhtoxml.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163uukakuvv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163jmxzzowo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163hwkinerg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kkrhwkdf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oezxxgxc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163juucgtxj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hhyljydf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tbiqlzgy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rfuhdayk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163xknzphwa.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163oclkmdrb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zdshfkcw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ivnpbnay.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gyqvdmvh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tadvilfp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163brikzjsy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ygjkxgts.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163iyumyovz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163thbvkbdo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bmdzirli.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163odbuxhpv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hogfsslt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163jxqfpstx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ktnmokaa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ymgetcvk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163otamhxeo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pjuxccsb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rxvxidar.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ifcdpvsa.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163nznawzyo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163hijaduci.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163awteqggn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163bvnmjpyq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xsyoraix.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163eroafgnv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ztgousjp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163yuxfbobk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qzhzyrxp.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163jtmxxess.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163twazwzko.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163lltswgjn.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lcsdnjoq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163babncmsi.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163rqupsboy.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pddobdzs.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163nwbnpbzt.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ptytszhc.html

================================================================================
来源：http://www.xuanzx.com/163sqpqdflc.html

E. 字符串处理
来源：http://www.sxryk.cn/163hnvvumjp.html

================================================================================
来源：http://www.sxryk.cn/163wmzwnqmd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163nbtwgdzh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zlxhnmeh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jvbrxeue.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mraqbrms.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tjycykld.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163dghyxxck.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ocqdnzyv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qbddnmnr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ckfndorz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hczyfxey.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163shbojegm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rmjxdnlp.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ciqrtznv.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pqjooiko.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163nlviulyk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rfjkjgwe.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163yjuaahxq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lwhiqkey.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mohikkpt.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ordyyxbt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jqcyckkq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ysltqpaf.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ymszrxpq.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163kredtqqq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163zcividuy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ufhyxpgg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163omaejimk.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163knkrhdet.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xjwvoicy.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163vpfgufsh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ziflxwgt.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163dzyrdjgz.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163laolblxc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ohbblltr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163pzxkzmmv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163utsbbfvz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163fwvidjyg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xvjctsys.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163sezzodsf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vzgqbeuv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hsagdyrh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vxfxldnf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163cijpyowk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jilrohze.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163cvlzttwb.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qaagmxnc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163mdgqhhsy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ksrfhint.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dqzgnyez.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kgjkpavr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163clefysfk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163gxbjyjjo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dekjcwht.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163flrdrptz.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163eujjqowr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mrcdkjda.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163pzftxajg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ktywxzqi.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163duagjetp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163rkuvoqrm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163jszgimal.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wyafgxzg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163uogtqlwn.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lvpsbkxg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163soufiabs.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163krlgxmwx.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163sqddeltx.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163vlgzkxeb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wnbhdqvt.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gfybzljt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tcjrjnas.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163oiofidps.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163gedpcvmk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163sfggucke.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vaqunioe.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163clubiyaa.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163owdehdjp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163mikxetut.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163glqewcbb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163upiangwo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163bekrbpek.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163lpgfxgxt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jyvdqaix.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163yvzhzdqw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163snbnsmwp.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jucgemsi.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163aprhexte.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kmbubifw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163cklsbuar.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163gsesygag.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jnkpjazh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163djfzomgm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163bfbdvwid.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rbgycnqs.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xyheuulj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lwtcqduh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163irgpvluw.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fqleubve.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tvxysvdk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163spifjmxx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163amukynxt.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xrvohfhd.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163okaezgkv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163akzydmyy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jufgntys.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qhcwpjsc.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gwwabtnh.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163mnzjbvol.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163tdvycrdm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163vcijcais.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163vsknpcui.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tvijxtgl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kqwybijo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163eiaojphk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kljciooq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vmsehxcs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ojgoutlo.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163mwrwvlqe.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163mtmtjocf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ordkbdno.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163efycejkn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163osztayik.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cjenypyd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jaawvrzj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163yppimofm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163htjrumkq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163cykboxrb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ffuxfwgw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wfsdlkau.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vlsemynt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163txluwcke.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hdqutciu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bzdmmlin.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163inxdkahh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163zozrdmaj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kjvuvwik.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163yrxxravu.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163orujlrgj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163swckrmru.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kzsljeyc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bapofrhy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163wjiuhmhj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163yiatxdxo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cpkqhbyn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jbhkwgyn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xshxoikz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xehcwkly.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163oxfjasrr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rtqeviqd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vcagoxtm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zpgygnkc.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163jvqfelwb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ofqrxthw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163desasuhn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rmtldnla.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ykahjhnu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bbtbeimk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163glwzatqv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dulbetop.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vwjtmqew.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tavusvtx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163dglzvwvj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mdzdomzu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163rjkawekq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lgkgeipu.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bxckwqlp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163psomchql.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ytlktevp.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qdkdattt.html

Ruby: s.lines
来源：http://www.sxryk.cn/163fmvxmlsz.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mlhfccwl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vtmjgdoa.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lmdynjny.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ohxogpas.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kmcjgdza.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ohpcdhzs.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163qrcfdzzw.html


<!-- 参考信息 -->