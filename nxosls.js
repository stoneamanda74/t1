外链999!wailian999！

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mwhzqcuo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bbvzyams.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163xaeyrsel.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163mnbxfwti.html

[D15] 去重
来源：http://www.sxryk.cn/163kgdoeilg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bsxrfhyt.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163slhpysie.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163imffbhsp.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ycehcxzc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ebqdbxho.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ybmvnuxj.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163eufnfxbl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163uxuyeyrq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163gazlvtdq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qxoupwhp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163vqtjbpyu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ypuklwac.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rmbwlugb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163meleazaz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qvefrrmp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163fumuvvem.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163unewmcza.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jtzwddsm.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163zlvzrkkn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fqxeryhl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jfujejfm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163pwfohagc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bupjvivf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163suxbpeai.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fkgyubdf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zwticpmz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163cmdhljqb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bdymwqfw.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163sbnjpqxi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lpnkpbpq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163escdldbw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ycrroipv.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163osgcstvu.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lxlytloe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tbyhphom.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tnnucpxz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kydpoixz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lssntxzq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163exckbxrn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pobxykfx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xtoookcd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ixxsndgx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ptuoxopw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kbkzxcay.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ylzfsqzh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ophrugva.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vltmkbic.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hziwgxix.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hmqiunkw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163phokuide.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vnwjxgse.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163cwodrzvh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163azptrxhv.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yowbiuzu.html

Py:   x in arr
来源：http://www.xuanzx.com/163rscnrifc.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163uyfjjalq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163vsutgnfp.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163amejcvup.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rpuepliz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163yqobueob.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163shlwjzsd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fobheuqw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163rvhgldhv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kodvfilz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dghpjfve.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qlrgitlb.html

TS:   [...arr];
来源：http://www.xuanzx.com/163waamskmo.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163byegylmv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163fbubafgt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163faomjikn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163odhirbip.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163iieczfrf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rtsbvlwi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ijidtupt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kntieium.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bvmvggge.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ftmxmcnu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gdxxyynm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163klaxvhzz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163pmfmrqsx.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jpayituc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163gxrsvfko.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ktscckes.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163otjfbehd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163iuwgjcqz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qrrrwecv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163eebarcjv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vdoddvxi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163qkwguxxg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163cmmjeluy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jerfhlkj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163agqmutjp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vpfuxlaf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hzoqjwov.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ogplvyri.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163jncsaygv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163slddplwm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qtdddvqa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163xnmfhusm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163dwhzvugl.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163caaccnfw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mobakekl.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hdxyqeuv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gpvsmrov.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ubesrbjd.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ikcvbpsa.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zfcghixk.html

================================================================================
来源：http://www.sxryk.cn/163lgowapkp.html

E. 字符串处理
来源：http://www.sxryk.cn/163dctkjway.html

================================================================================
来源：http://www.sxryk.cn/163hbgwjqyy.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163yffcaxek.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ttjcrgas.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163istarsck.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wehoxzjl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mahmrtoz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pnuanvpz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163gwlnqfbr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jfaaqmgx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ctfctfwu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qbjkyynu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qjonyiif.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ysdexjzo.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ghikyxdc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qaggzjfr.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qgythkbk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ohoqhqmh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ardzytji.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163uiaxkuxm.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pdtxeshr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yiwvafrl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mmnpfiqh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163rljrjfjv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163jvfnqpwd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xzzjacbp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163oiicbiea.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ivfzzucj.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yrhvxjys.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163fpsrhkrq.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163sbmfknbi.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xzrkjera.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nevwrtcq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163pvtgllst.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163bngnrcxd.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163shgbjcez.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163dczxzbys.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163kfolmmho.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163rvqcnuai.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ncpqohwi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163djfbxnzb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sdjecqae.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xeyxqrbm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fdovhgpf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pkxnqtlx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163amynvaka.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163sfzhuozf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163aipymvvb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163lcywkcun.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vikhywfo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163stkwgjib.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wqvpcqwb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lomkowqu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163htkpajyw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163hxoyqfph.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jucsnpmb.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163riiwsemf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163kqjejcyb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mnwmhtps.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ophazcbd.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163lmogcllo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rjaitqmw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bpfhrhww.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163zcauncyq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rcelgffs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163zuccupti.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163gxnikqhe.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163yjjlsurh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xqtihhty.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cycqstyf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163sjgkjmsv.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163bssitveo.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jzmhbidk.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163aewrynmq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163hpjtxmqo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gbuyidyc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163jeebxhxs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dtbnmscy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bvmceefb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163tpgvtbsl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163uzwnivyi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ojvfqtfw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163irattxrg.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bhdtnpvv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wiocpkqj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163djmbbtrw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163evdxqcdu.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tjcmlkux.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163yqytgbie.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kfvcmzlt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cvvhcpud.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163jolygyzo.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163yduamclc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163dgxwwovg.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163tuhdfgfq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cbbcxfty.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ybhclqbs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163vuoiswvu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163htxfiega.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ehgulxnz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mtxuexqt.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163aushsrdf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163yocmsrmo.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163lfnxeqtg.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163khqzsigz.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fnqabddk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163keytimsp.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163rivudviw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tbzooafz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163okfxmkqt.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kynuaxxo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jrjgeoha.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163vhldgfbm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tvvftovx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163etjzrpay.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163mptviqao.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163yozumyrr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163yuerddib.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ujdzfjdb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163axjjmexm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163pwxuuary.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ccobytsm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163zwrlebsl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163nmxhchoo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163sjxtuuqt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163tyjjlzne.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qvovowib.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163rzdpdszw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163sgcyzysw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163onkjycyo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163czozkppm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163tdjpkhfq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163rzjerbfk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jykuwveq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fusfelgp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tghsvnif.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163nkjvcppq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fxykrwsd.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163stvzxnes.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pifnrxuu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rlopyzow.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dlzuukfr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dupmglxp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hhpqwcgy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163yjwtklpq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163wyzzydkh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163mtupqjhf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mmteizne.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163cfypnqvo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163eyqflnqq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fmeymbnm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ukrvuupp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163imtznxqs.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lqhpjveu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163aqxapcwn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zopkrvit.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163awkahvnk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ridawixt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lfdtabmz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wdqlivzq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163renyaxlf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hcrbsotu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163icgnwbfo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jztzicpf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163szevifsz.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163czzvawrf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163mulfgoyf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mciemgpq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fggkiifd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163orgckuvp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163thixuyoy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cqlsokat.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bedwjwsu.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163biwlydct.html

Py:   if not s:
来源：http://www.xuanzx.com/163yhlmvyhc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jrjgbjlv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tkrjpppd.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fowfzhsh.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wgulusuz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163drvebxnf.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xmrxpxiy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ppuvxujk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163avgjvcbu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ftcfkvhh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hwrffkdr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aiecuwvh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jqadbzun.html


<!-- 参考信息 -->