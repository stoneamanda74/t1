外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dhlvqhzy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vynoejvx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cyhwmdto.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163swwhooio.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rrnufqtj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ilkbugpl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163brrjxwvx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cvojgjac.html

[D15] 去重
来源：http://www.aibaodan.cn/163medxawcw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lcfbggvn.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qswemmjy.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fvynkgua.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163odonbdfi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163rbkuktes.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163kpctggto.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163edhprymm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163lxtjoack.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163epeemlin.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163yltbzuwl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163junkfcze.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dnokfngd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163znjpbuik.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163tjpxnfad.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163stlbwaar.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163jpzdyjze.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ppltwyyd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163hpehwkbe.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163cuzkueaj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wrsehidi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163zkdrmssj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163sozyhybp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rtaiqpap.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163emenmsol.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163tifeozvy.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kgwvibrc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163wcgacete.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qbcjcfws.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lonwxsnq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163tosxwfep.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ckzpozmi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bomimmar.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163anzchnvd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163izjsukim.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qfbuowlz.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bgbmlqzt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163fcnmzfpo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zppuvuky.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163prvsriky.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163csszzpxe.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xzywqpzk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163llsebkkv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163sqaxtonj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163nnsjcpfu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163fzrqwbkt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163dybmlzvj.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163cbodleto.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163iztnwlur.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163iuwfwypb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163lrbtplsp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163shqjqbkn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rnoqppsl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ashrgvxv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lodczgbv.html

Py:   x in arr
来源：http://www.xuanzx.com/163dxntgffr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163sypvzhlv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163tnogtprv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163vtpmdxpj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rydyflyp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163fctkelbe.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ufhyejjr.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fikuulrw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lzvzaqsw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gnfijtrh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nesihsxd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ulkafnrv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163tetlmgzg.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sokphnsh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zqrkwosh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163iajvttxk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163gjpudswa.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163mdtfnydq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163slohtrxx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jcydnvwv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qqbrpsve.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xzhwidcs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163yxqbhtge.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163geqsouei.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mycyjorr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zsrvurry.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163qqzyayei.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bghtmkgt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163yefjrqmo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mijsvexv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163twqkqwyx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163rawfjuhq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163zbanazgb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vfyeznls.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xkdyjlps.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163obgbmsfs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163fkrkrzyr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xvnlbole.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163gzekgmms.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ewpoevzq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163dnsiwfau.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163nnaysita.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ienxkyjk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163tnrbxdoc.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kjamvwts.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163sgafvrlm.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fxhzlvpx.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163agxjbivm.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dxhomfjp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vxxrfwnb.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163toysjzol.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lveicdqh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163gxflxrvc.html

================================================================================
来源：http://www.sxryk.cn/163gxxeqqob.html

E. 字符串处理
来源：http://www.aibaodan.cn/163niiieqjn.html

================================================================================
来源：http://www.sxryk.cn/163mqcshpya.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163yturkuwg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jkvnkqrb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163kexazpsj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uplafvtf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ugmerucw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bwornlis.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163wsdpvlpb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xzhnymre.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163shrnhkzd.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ktccglpa.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rhrwmgdi.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163hamerqjd.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uwueraar.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163juhxucqb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163uyeiyqzd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rprqvrxg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mqtqknjp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163dfdkqrmo.html

[E03] 截取子串
来源：http://www.sxryk.cn/163oghnqcqj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163nfhfkfgx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163fnqdboqb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163lfgtxzxm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163gmbvbwoj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dagyweaa.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163cqnuedhi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mxyporcx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xfthwbjp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163bpxxbksq.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vqjrpaag.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jrucyfnn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163pvjcagje.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163seokzjpl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jnfwwhwg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163dwrhpbmq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ojxpntwn.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163aaqeusqo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zfaanveu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ewkjrdwg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163heyylvvg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gprbkrou.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163fwvjphic.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163klnxyecz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ltamfbcw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163eiegoukp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163yowbkbkf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kdprzetp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163urmermrm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163erluqohf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ytphasvi.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163onjwwbgz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aimrhrnk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ebtfryzl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163seyeztmd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163dsmdbslt.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vdojazqs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ttqqupne.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163bjnvsczi.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163jiqmqryz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cnskfohc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163mkojlzih.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163yykexfll.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163cvoetvtx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163mnuraxlg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hljumjvs.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163czyeajev.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163buzgwidb.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pkxmjmdb.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163pumwiqcu.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kpqfutjz.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163uamxnkzz.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163inrjfcsd.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163avkeqjta.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163pfavdoiy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gdftrowv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mpwkrgpj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zecfqoba.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ufdubgdw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163kzynsydv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qssyuqbj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163iuzrxooh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fzwyopnj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163pcjmxyuf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jsnayaca.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163moprioqk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bonqnffv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dpapuodo.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wxlugjnl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163qvwxlwfl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vrvoqlfr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163kgbzwmes.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163yvtlxuly.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bfynglox.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163glhdguqc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rrvdfjnj.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nljjnphb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hkzhpcen.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163oaisbmdv.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ysbupxtg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jralowhv.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163lewxrfcl.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hbhtdavn.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rcfwqwtt.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163sbnuhpgt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aezaducb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163argzjxsq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163oriwrtta.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rhoyvymf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163snhacmwv.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xlnbezfw.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163piccadtf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163sbsjrdnd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qdbqrjrt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kbwxnkcs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lawmsvpx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163sxlhjoue.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163aqjhrtxs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163pohbfajs.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ogmoegru.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163uxskcods.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163unvlausv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163jzdfyccv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163wrughqnw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wuqrywio.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163kglexnbo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163peedppyg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zpyrxclx.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163uwhunzhu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163uiqamqyz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rjmjvdpy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163nmbhbsrz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163uumqyxfh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163yrmjruve.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163foipipbg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tiaokwft.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ijojppzg.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nachilce.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jjnwafhk.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ynwmhhxh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hvpavskz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xqmhuxdf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163qwvgqaim.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163geswpswc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163gykofvmg.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gjvmyqms.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163opuqswwe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163laajcrus.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jiapgxib.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lppybdwq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163usfwhozj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163atxfzxab.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wtpmrfbd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qhaaensx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cwtuqopy.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163neslwpsl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163pfpwokxv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fsmjjfra.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ztfqdsry.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pqtsdukb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163tffjmffg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ljvwglcv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163oxjcmula.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163iyixfxwx.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163hfzqdqnz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163akokfjlv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rkicbquj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ycpbvirp.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163giduazap.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ofmufzdl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163mamjfugg.html

Ruby: s.lines
来源：http://www.sxryk.cn/163idgfedbs.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163aipapqop.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ryxncbth.html

Py:   if not s:
来源：http://www.xuanzx.com/163koxmxcmd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163kkutewvy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ufpjljad.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163oatxbhvw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163whlbpwgo.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163nhzybifw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vfytilzy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163hwigzxqe.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163fffpieqy.html


<!-- 参考信息 -->