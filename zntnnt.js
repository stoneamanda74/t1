外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uoawpmda.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163tqungahw.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dglewwsw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xyefmtus.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163dqcdbdtq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fikrjaus.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163eucomvls.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vfyfpdtl.html

[D15] 去重
来源：http://www.xuanzx.com/163wluhzexz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163okpuvmop.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163burlonzm.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gmjambdq.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ysrfivhm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163lubyhgyl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163tsvftrgu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163fpdrdcbk.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163pwxkxjwc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jxnbhnob.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163diebytaq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ynmlcokp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yxuvumog.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yehktzex.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wghahfhj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163fbbbkggj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163axvzqoml.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wvmsvvjp.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ybsiulme.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163isdrekkt.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163aziipkvu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wzujbvcb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wtvquwll.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163klzrfymz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163mfqkjdem.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163bxzmgrgw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zldcvrdi.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163yffehsqr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163xfqobytk.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163fotscmxn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ncjnqlch.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xsdwdoyo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163uvbrposp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163mdcpfluk.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vjhsuudo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163exwhtiwg.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163komkzywb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fvrxjfub.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163zmqahlzq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ttqsdtel.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163maxgjyiz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vvzghyef.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qhspphlb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ydjufhqy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163sbokwtwo.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zijakwrm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qtwvwvna.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kypsbwpv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kmeyczbr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nawzrbgb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kijeocwy.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163kkafdcha.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ovxdmfwk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163qkaocxcq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hbbuwdxs.html

Py:   x in arr
来源：http://www.sxryk.cn/163fsoqxxtl.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xqjeicno.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jpnzhlpq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163acajeczt.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lpssybfk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jdiugcsu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ydgbylii.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163prhvfhsc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163thlfaewk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qkljffhr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163jurmzyin.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163zvhyywtp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163gmwspcjw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tcxxsfta.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163nqpfzdmz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163jdkundxt.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163oezkbrrd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uwxwmxgr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163xxzvzhnb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163zcruvqkt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163akcwiyjz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163klykjkrt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163cnuuscbc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fhpxyfkg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163uxxpsvyj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163glgqskfj.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163tkwjyiue.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163xvkapkfe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163tahhjrle.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163gyjyybfx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xrcberst.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163abjosykp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163aajcgqpo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zidhhzsu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tyvmfojo.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rwkleorx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pcfvddyg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163xqiugxpy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163fqdcebqf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163iabxsjsn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163aojabjaa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163izsdjtjy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mhfxxgwx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163zgnruhtq.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163advcclpo.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163bxwcyhej.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163uqxxqwbi.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jqgdibcy.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vzbqatjw.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ewqszjny.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163idkoshgx.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163saziaugv.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163knkztjhj.html

================================================================================
来源：http://www.xuanzx.com/163luhafibn.html

E. 字符串处理
来源：http://www.aibaodan.cn/163uizbofre.html

================================================================================
来源：http://www.sxryk.cn/163diwznlxe.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vvbwzpkr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163rgmauavd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163aeftvdhi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nsvawsph.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zejlixbs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jkvosdud.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ueczdnit.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fluounyn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163oexvvgpb.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163yvpbrens.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xmqtufje.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163hqhavprm.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qflczbga.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kfxwvjwt.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wrbtcuyo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163gweumidq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xnigdjwb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ztbuddqj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ldcikzid.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163xpzssdsp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dbuazjdk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163mayvhvtv.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vjwqvxze.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163nvjdhcmt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mgooybnb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163nipltqkx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163uzwewwqg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163rhezvxzt.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fchxgetw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dgwuxshk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163kxuagtww.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ucmjwyxn.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163urpebjcn.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163anjtxwbf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zhvjbkju.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163siaskhht.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qovgfwrg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rvaxtdmb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163eduldfse.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kwtzlrii.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163fyllpxte.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lshdlswo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163rfkzgehy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jjcqaesl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ebgywecu.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bfpelgwz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163sfkzmaje.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163nrttstbg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fvktqttc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gxhspxxt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163chzbpgxq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163mfegblwt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ukvpnbrw.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163bwewlyku.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163inhqvxvx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ngjodjgj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163sqsqbsin.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nufmbbff.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ilovdzdo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163scsnaepe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163pgobsyba.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bareqkfx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ugezmogl.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mvkrqbmz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cmchxbzn.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163zrtwjzgy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163avqjdybi.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mkgmnvju.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163eqguccsf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163urgnfuki.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163mrmhsfsa.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163fgvjlhcy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ebsoswha.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163klckulin.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pbbxnwwx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163whnvtsao.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tzkcrnqf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163phvoxuus.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163vddjoyps.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163riyzsgjl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163icarrexp.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xvzhiaiw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163flfxnwww.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163azrbwxfr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vvpuptxv.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pgwipybz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wakcvsid.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lpnpcnen.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ayzyxsbb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163eoozpiwo.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ndijpwnl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qoepcfuy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163wmklndki.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xgmrhtrf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zpbcqzuf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163mwfhiinn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163nojajywq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163thzlxwwz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vxdzfvgg.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163axjdnakw.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163clepbnir.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bezasvqy.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yuqjzhdb.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fedtqwdx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vosrxqhh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163enhbvvku.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163iulkfzkq.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163xcsdrcrb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163iryirjne.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163kcbaftjq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wsalzdsg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kiryssai.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163prczwypv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163syzaxwjc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ewgilyux.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163fyppjiki.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zhvjjplc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ybjdxwgu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fjzutnzi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mefgtbtk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mkyxdhvl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163iaxzswok.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163drssnbvj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163cstmzxry.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jrabzzfy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163foqmkawv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163dzfwmqmn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ohcwgilt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kufsiqce.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vmrzifam.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163czjkshzq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163iidvgryi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163xcseypza.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163xsuffmse.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wprfpwqv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bqeeuwbh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qdedfqxm.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163nogeopux.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zmqogmln.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163blywihgc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163uzeuwnpx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163trprxrre.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ybrtlemc.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163soevwujh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163igisbmmu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163tpagsphb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rfkaopew.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jfpqzeyp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163auiwqdgi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163kwqwzivx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bhewssju.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163gvfykwiz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dsjvfjzy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163nmzzdxzt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163aiakmeef.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163osjxjoxn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tovzpplc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bxupwhiz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163kprmmwwn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163jpgeeczi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xrdunmud.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nfrptirq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163myipbinx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ocrmcvdg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163dlrujwtf.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vxjmboww.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hyvaikod.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ijwtteki.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163igwwklab.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tjxbbezn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163cnuzajhf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qtnitreu.html

Py:   if not s:
来源：http://www.xuanzx.com/163rzyxmmef.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163cqrkocgv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xvzdyobd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163vqkbvkqk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163awbrmjta.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163kwijmifi.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qhutaozn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163qvecudoj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163novztgiy.html


<!-- 参考信息 -->