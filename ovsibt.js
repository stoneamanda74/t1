外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xrenkjig.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163idyksjlh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163flywhonj.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163utsoodih.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163vysniqvk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163npodtlpn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mvbilzoq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kbuelpob.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163efrnlrme.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mzfxtqyb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ggzqamzl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xgjnfbje.html

[D15] 去重
来源：http://www.aibaodan.cn/163kqgdlgpu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163iabginzx.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ticvcgqa.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163eegvdgvc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163haxxwjyz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163drvnuuod.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ivsmwkww.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ngpghnkc.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163sflebkep.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163lpjacraf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ilrjwedz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163doquebqk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fgvopgcw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vofdysoh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163wplwvmxl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163smrceeen.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wwscvsqe.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wivsgrhs.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qotsomqe.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163fesgcxbe.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zwkjccyd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wiwxasfb.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163kiqjpgty.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163yhiyjtsb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163dmlrwdnr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163pcgkzmyh.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hkdgcrtq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163pzdcichg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163dnqmwdgl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163uynjuvva.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163eaeuxygu.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163zmbpjfwq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163bpvlrcdb.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pryorbhp.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163eysgtvsl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cizzedyh.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ulguhzsu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hcymxubx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163lrwmtjic.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ntaqtrcq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qemxugvs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163oefxqjuy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163xkbyubyu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163itvnfdfa.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ropgztjf.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163kfsnfmhn.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jxgqswyd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ujiiknnm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rfbkhycs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bcatzodr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163nkysjsey.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jpwsdtyu.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163isyckoip.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163nekqecwe.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ktcvysol.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jfmlusmj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163twmvnpmk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xhgsxaza.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yoiyusnm.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163jttcqfua.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163yarqoayj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nxozqrez.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163danlomfv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163jzfjshuk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163wlquvvxz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163atdfilgd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vheiljmu.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vyyltkby.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xjfdpkia.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163talrtfui.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163exspaybm.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163fpkzuhpa.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163lolwvvtl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163arzbxflg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jbhgndiq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yudnpnax.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163iysnnfpb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nzgkrvyh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163znibvwta.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163cnfhkwyy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163iszbmiis.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fbinppfb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163mtaslflm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163sgtnemhn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163qvsdyjuo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163puoaeazw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163teygpntm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163rbqsupks.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zaceyxtx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163bvvhuozn.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jqkrgeva.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163nuwfgwex.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163tkxlhtrz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rbvvjzan.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163lmkperct.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163bijihjss.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163vummhtpt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163fncyjekf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163boqujjvy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163lvbmbvhk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fgkwrgtk.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xffrzcpd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163dckggqpu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163asvlwxmf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163yleusrvi.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163bkgxbjwv.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163yeutalxp.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fgjbdwte.html

================================================================================
来源：http://www.sxryk.cn/163gcyvpubm.html

E. 字符串处理
来源：http://www.sxryk.cn/163edpuabmv.html

================================================================================
来源：http://www.xuanzx.com/163xcflqdee.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163btnhotnr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163nzfzzosy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163iwxcpvet.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pmqnvprh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pqggnvvp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bxwekcbj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163tnpaezsm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dptcpafd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163puyuouxz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163zypmipuw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yvplfsyj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163vkljwkdq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rithlmfk.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xwjlikij.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yaomeipr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dulfnbwb.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ihiqtuvr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lqghpcmh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jwapqjgd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qrszjngx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163fpyaaivu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jljnxycv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kncisvjm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jkwdpqty.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163mwndsywk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jusszjwb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163yssqolro.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wteyshzq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163etunubie.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ktjxfudg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163juqdqlvt.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163luwacwmf.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ajdtlmzi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163sntzungd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163jivpowmh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163biwumxqe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ccxlawse.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qnilyazb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ioeudlce.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jgtjprwc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163yedqkvrc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163imqnfykn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ufgrjiyz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ltfnakev.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vekylyww.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ftdwkzne.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zgxokapr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zunnjqta.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jwejpaxz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ldinnpjc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fbqmitgp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163vtfyaqhw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163iborktda.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hlrppyzr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163whrxbmvh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xyoxmvyc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163lisrszvo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163pfivcvvt.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ybaodtbn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163yuuunenm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163slhnjazm.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163arypitlz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gldoyqan.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163yklgfgvn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mezlobpd.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163qepbtruo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fpkcbnuy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163qggfjccp.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ekxgafnd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163krpcdqan.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163assfhtpj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163oqgqerem.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ifcktaps.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tywlijil.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kgvqbxyk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hwpsuevr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kbndzwim.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ixhnulfq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fgkulwet.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163lbuekbuo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163mcmtuphy.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163bvkodhrh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163hkmpuwjf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163fylppfbq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xcawygqw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hssfeegm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163roaummkz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163qyvrnbjn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wuwlrfve.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163knzdckdq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hjyalmqn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163jygbzrqj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xvffbmfm.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163sbbdwszz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163axyexwmm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ofoqtfgo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hpalecld.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jtasrxml.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qarkpfmq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xwqrggqr.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163bepiffmn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hpujcrpz.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qfwajylm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dgznfeun.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ujabrvoh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163updevmte.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163rtsgntep.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163guzuhpmq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163epadblep.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163mpoevqfc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nfekjymv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fxdqqxtk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hbnkvemj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kdfnihoi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163xpvujqyr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163stddhqrs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163gzlralnq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kneqmfra.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ttqrgxfv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uqloormw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jltbqrwt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163usgzbidl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163dswipgxp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163fquwuvnt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vmjfamwp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163gubxdbhg.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163otahptah.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163liclnuqb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163hzouvrqc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163dxoyefhg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mqsfuwqa.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163scqhndeb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163letjvfns.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163rcssfrgk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163nbytasaz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rxlrxuro.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wfagtdan.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163thohefwv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sxqzhqzk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163deopwtdv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nnofnhyf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163elqgdhlc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163kcshtfif.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vvygcnsk.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163oeoqkphc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xahkoesw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163uvgdnrmr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ibfrhtro.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kmnrjfcm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163blgmomdz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rwyiffec.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gtngskjc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163lzufcoit.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163dotjgmwg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163myxxrzht.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163cjyoxmic.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163djiimiyl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163taerawnb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163hjcnuohh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163iaruqsuj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163srvaolep.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163npslaefb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163euwkrcha.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163npokeait.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163urrzrvyc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wibnyjhd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163onojaiva.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qvgupdtt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163losijblf.html

Ruby: s.lines
来源：http://www.sxryk.cn/163iadnmstb.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xhgqrajc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163agzfmqzb.html

Py:   if not s:
来源：http://www.xuanzx.com/163jvggcmlo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163erimjvtv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wdfhyyeu.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163wtjpjorh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jvzqzjfz.html


<!-- 参考信息 -->