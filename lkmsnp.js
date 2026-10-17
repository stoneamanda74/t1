外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163wgteoqls.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tvijcwft.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qyglbvin.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163vbyrkbma.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163uprbbjim.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mzcybiht.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163yxivptuy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163epvmqeqj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163mndgqzsf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163yllpdgly.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163tjzzzyyg.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ryudoalo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zjlwhixe.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bbvuoocg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163hropcqoc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hbrzxbzy.html

[D15] 去重
来源：http://www.xuanzx.com/163rnpbqnbb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vzmduhrq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zsgpgflj.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jhegiakz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163usplxuqq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mndypymq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rtldebwy.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163npqitpgk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163nvvcsyqg.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lqrbwiip.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lzmexzdv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163owepjphn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163btczcgek.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163czjzlncc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163sctobstx.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zxtubeaq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ousdmgdc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163lhrfznlg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qezrwtsy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jobojykd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163lflvwtdw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bzgduoxo.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163vxrdsche.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163osnoqemb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163iwxyspub.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163eymfagfl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rzwnczeq.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kipjqcjc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ztypncpd.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rzoasmty.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163hhxjikbo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163lfukkbsf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ljstkmyd.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163eyfsvzlq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vtnyvbjj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163prhvznvh.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163qzfjhipw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163armcvmna.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163khvaotfe.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163vnwaazhs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kukjiira.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jqkhrhbt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qljikcoz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163xqwmdhnb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163oubtpycd.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fmfhslyn.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163wdgdptmn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163jbaqmjdk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gdjcauql.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hiidvznn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rjvpxtcd.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vteovdnx.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163umrcxgsy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zhhrzwep.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qwhegyof.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kbhpfijq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tnjpfwmi.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hyexlrqj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163oodztlsf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163slbkfxwh.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163eqznvlvh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zsiazqsw.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163egszqzbg.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ykbvkjul.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ctjesakg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jpjfolhb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163kzfkmixp.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mxaaqcvu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163vtoufvoj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163nmfiynkv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163skvowvnr.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hmhdjbab.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uoepgias.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hywufpoh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fpfyzzuz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wqjaeghv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163yjkfbfad.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163wqvjkjqw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kkqnupoa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rjjziafa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ltzcrlik.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163fmaoxqef.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163epchjjdb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163nmhfzetg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gjjvqipq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163klbflrjz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gqzyhqkd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ybqbnpvl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gyqkrzah.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163sxujzeuf.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163angwbllq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zrmfhwsp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xvjaomzb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tpfiewtn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163lqvhguaz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dnscjfot.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rpmuxnzn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163nsjleouv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163utzdkjkp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wvxoejkc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qpmtefmg.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163orfvmjis.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163evajhivz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gjlwyexa.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ctanhqwu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kcsvezoe.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163evyzqrxs.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163zjtidclx.html

================================================================================
来源：http://www.aibaodan.cn/163mlnmhlxw.html

E. 字符串处理
来源：http://www.sxryk.cn/163stjxmntv.html

================================================================================
来源：http://www.xuanzx.com/163idusoeyo.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qgjvsaxz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163fnujtktn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fzmdbxnf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rjfmwfln.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mllsdgdg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163oayjwyoa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163owwbznvl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vspupxhr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xdhaokxl.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163fkjxfjnk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163dpxizpql.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dmdwnhzc.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gkdafxjm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163phueofen.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163jzdfpyli.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163vgiznbgs.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163cmgvgagv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kqbzofaz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163iutsaivm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jpmaknqx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gqwcfdgp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xvlagyli.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163uxlratrk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zmtyedfy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163yzksdjlz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163iewmdgef.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163lxvshmja.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163uznwfliv.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jnoglztz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jpuwvoqn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163eddawxtm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fnyoildj.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xxiomagr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163acsbchry.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ugrioqkw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jfeyjjtk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hgsukovj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fvxrebsp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163sqfcekhj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cmxhwvax.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163lgookcob.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nuawfxac.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163iwbtcpfe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163obzoxksd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hcxbjdog.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ltzlrlzg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pckczali.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xfmuamvi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vbgdjudu.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ktqwggrd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gcsuibvy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163yrqlbogt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163imlrtiia.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163upxveacw.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163izcthrxr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qpobvhmi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jfiakcof.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163scmxqmjg.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ioojulco.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163upcsalxr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ggohgfyr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hacybqan.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gfsomuui.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163pbfoffyj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163gttmztyo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jrouhjqt.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163gdnjdasa.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xrbjksqz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163uvmblnzw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bzpbzlhl.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ksjfikmg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zkiwebhn.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zgkslmao.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kqizlwpi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163regvbyxt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163majlazkr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ksrosbnv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163utfhhgxy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163fbkyemwh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ypwbkmbc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lsgofann.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163uwpscupc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jyuralox.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rnyidktw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xdfvruaw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163upssqvpq.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163dswbxbgg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163lwzxfmql.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163oihzubbt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163omvooycm.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163owjehzyh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vvtrzhee.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qdmycrht.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qnvozsis.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jujzrrji.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163sgzfliil.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163svnjteus.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163asjewjqt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xvryljiz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163zkubgwnp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xfpwobeu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163kszzzvqs.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yxbjupxk.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wuhcreia.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163vvymwdyp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163pmcukgrk.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wqqqiqud.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ecoyibow.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rosvzohh.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ppnscvba.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ctmdoxjv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qosexkkw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ijpljpvc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ngtaossn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vcirfbsz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163dmjgahla.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163fwornwsn.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163amizmmab.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ihqquopp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ybxtlynq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jwtygcyx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cqptisgi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163huvuxdys.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tgkohpfa.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163apnegagt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qeljujgd.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163wulmaiqc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163oxzhtzsg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163wtqahxsm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163gipevwaf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dnjtzckh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ipinhbfv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ejqcgcnt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ydhftogi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vzkibdon.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163siqrnbyl.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ezpzxvmr.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163drmreboj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163logxmnwl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rbgulzib.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163puxiuhrk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ooepwfem.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163oftnigff.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wfasyxvw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pknjcdjr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ughuxnys.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163svxxtfzo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hhpusytb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gwjgprjg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xyfdbevp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ygaonuoy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163enonqnmh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163aebtdilw.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163yuwsxlnt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163relfquny.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tzucrytp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zzwqosrx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rjnlqags.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qboachai.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qnxvpnkb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gmeltpou.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ukroenwo.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163udnkmszq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163zezfafts.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163gwmyclez.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mgujuwsd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ftzlibnv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ibqfgnzx.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163zphojxyb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bpjybvuy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dqsnedaq.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163dubjvrkg.html

Py:   if not s:
来源：http://www.xuanzx.com/163xbgjmbfo.html


<!-- 参考信息 -->