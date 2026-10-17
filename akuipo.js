外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dhtvoihi.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ijstzxkr.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163kvbgbgui.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ixmiggyj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163fpllpodv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kxnybfkr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wyvmfdbq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163hmlxwoyi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xwewiqml.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163pifqwspp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163uyjayenv.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163mzvdahcs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163pgrxmzgt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163yntckzbd.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ywcscjvo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vaesmlmc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163vctskexa.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yliyennv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gsbyndfj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163njzcqcyi.html

[D15] 去重
来源：http://www.xuanzx.com/163haejxbsz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wiuurszb.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163agrjuslx.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ibkbtmry.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xvlflxia.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163pppaouup.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rrvlpyns.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163rzvixzyp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163moqbowzz.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163tckyguvr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163betttgxl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ycntrnpp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nqfnksqa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lqcpnuks.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ygrcyggs.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163jgkatlfn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zcwlyhot.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163zzoaqstg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vkgqrkbl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gmjgwsrx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xxqerplr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xaipufeo.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163sspsfniy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vnitizvi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xydzrxkp.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ofyxibbu.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jgfglica.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163hunpnjkn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163smmtugbe.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fqugpfzk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163lmkdqycx.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xpwclbin.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163fzpozmbp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zvvxkqqf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163djskqsrj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tsbzhivj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163zhbkbzmh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hhvtpyxf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163pcniucrf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jtojnjpp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163umdrtcah.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wccaacxt.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tvfcjjdc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163tdawqfmd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jjdyurma.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163bfdccvil.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163moctpgiy.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163orkyacuy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163eqsobsrz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ksmexqri.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163fniboccw.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mcgnkghl.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kxinzquo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qkozsfvu.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yjgnrdsw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163klgycxzz.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rsqsvaks.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ndrqkdub.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163niwrxpoc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hynvleyl.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163laapuwky.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ltoiqunt.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163wivxrncg.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163hmxrujgl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163xphaepun.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163aufjhbrc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163bxaedgjh.html

TS:   [...arr];
来源：http://www.sxryk.cn/163izjlfrdr.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nmjbkgfp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dgwpgjoe.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qjfgkicq.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163dxvjsgob.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163gwohefng.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163rcencmxr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163oxqnbzth.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vcjyqiih.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hsgntyld.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163dgadfwqb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163osrwoyec.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163lptuqnky.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163lkjahinw.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ueqclipb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163inygyqst.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163znzktrpg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ixaguhls.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163slwyfakm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ocgqyqvb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163eaqzjxhs.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ktmjdxdb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163jutecymv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ztgyyumx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163emnwxudl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163nxlfdilz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ouupjxbp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163yucadzdu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163zuivfzfz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163flizmykc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wpphthgs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163lpjikmfn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163elnaaped.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163gdjobyqg.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ysmsjseo.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wqowkfyi.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163qswnuooi.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ckoezosw.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163hpupjkil.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163imqskuid.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163aaylzoij.html

================================================================================
来源：http://www.sxryk.cn/163ileuocdp.html

E. 字符串处理
来源：http://www.sxryk.cn/163unmjlpji.html

================================================================================
来源：http://www.sxryk.cn/163euznokst.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pzefkmpa.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163urnkskeu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163lyaxivzl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163deiazjvq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gamvtimd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163shreoyug.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163nojeuukc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163epcrlzcw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gbaapdlo.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163npkkwntm.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zafihiag.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163uqyizgzo.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rvzvqswd.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wafsmell.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163eyhpbffa.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163cpkshsev.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qyplbpgx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bdztolob.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163lgzbytam.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tipmahzb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163iymlleoe.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163vscnnrxo.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cgilsvpf.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rgvxpkvs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wlyijzob.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ezahlhwc.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163yfxuqypr.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163joqdruge.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163smyiigqe.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163febmaaas.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bqssafba.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163gepikywa.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163dwxfgtri.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ayxvgcsz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163hctezmfq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ycxgymst.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vgacyomf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163jalaxaio.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163taklrtel.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163opmdkogp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163gtqifztc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rbhfrmtc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dixqvpcu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163weiquneg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163urqeradx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163yodnxvpa.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163aaeqggnx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wvufrwvl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gwzhtwox.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lwhkejwa.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eakbxmoe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dzzeqbrh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mljbdwbc.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qjtkyjtw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ykaswffi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rqzofpch.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163pivsmgds.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xerwmmms.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163evuewtxj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163iltuiqbv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jljkqzgg.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lhodsuko.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163jzqpmdsu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163iagtirwa.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163alpocrue.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163mlilmdsg.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163osmhsquz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163tfqracca.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163zjnasklq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163asiveirq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ckiaesdj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163kwxbmaxu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163nyxjnmub.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163hfcbihyk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163uaenxyrw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163liwwmeav.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rsiqinxb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ghzyoryr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163erbbrphv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163fdhfrtkn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163aaaxwmou.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163igricztn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163svuueuze.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163pbzzxifj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ltbalifq.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hggstmtv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163spzjoyhw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163lsssobrm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xhkellfh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163sbfkusrb.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vkshanxy.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163qlnekdnx.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ciiurmto.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bawbicqr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sabdwhwg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163yvqjgjax.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163zzbieloq.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ocjrxoix.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fsifexjx.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163wnizzmwx.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163osbtdyvt.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163gswgcxti.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mxiunjrd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kpixabwh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jiefmzef.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163tzhaagpa.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hcgfbcff.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lzngasyv.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vvqitabg.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qysfinpt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bblfncud.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yqraebny.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ghphmksh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163epmirpym.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163spcsyxbk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163cniwatkf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bzfgdvwq.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163eklxzlnd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163bcdmevwu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163seszvjvt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163dqucafxd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dwoanxsn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163eekkfcyd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vgldcsfq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zyayiasz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163cmozzdyw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163redvaxzj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dajyzfhd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ufyccaoq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163uobzdlrm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lstpitdy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163negptspi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163jylezcpb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163inlqoefb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163mbtsaszv.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zidixlhl.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fhejsoqc.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163netjfqno.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ncoqogxv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163aoqncsry.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163qjwmmzce.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vjbkbpwq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tdqgwlqt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163eltfluhw.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wzretmkn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mugzmcph.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ubpqmpkl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jhlykylj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pkwimqug.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ikzyzost.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163kensptvf.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hurrnzuv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163diyzhjet.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163fdvlggbp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163crlzupzk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163skuodzcg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gjffwmtt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jdchhrpy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163fqykwsjc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163lznukhga.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ytmlyxxg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zyizeuaa.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163cpaieeml.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ihyfpmlb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bfkneudi.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jmejkixf.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dzmquheu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163sbthtzup.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163hbwpqnhe.html


<!-- 参考信息 -->