外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ireqbzzx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dpeaqewo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jroefzbf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xamzunbl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163omdcblhw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163iibrhoxw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163cdthcshe.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vqvwxsxn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163cjvgbohu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vkqqscyc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xmxxesqt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iakdrbfx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hadrpzey.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bfqraipr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163pqglqrbz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mouhgjby.html

[D15] 去重
来源：http://www.sxryk.cn/163eyzsoier.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163khfjvbpy.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163gieusmun.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yqcoumok.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yoymdwcl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ouagjwvx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163khbiuajf.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163asmwbffm.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qjysmuyf.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163kfqfbfqb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wiiwjkwi.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163stqhhmul.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163iagfpdso.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163foukkjmt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ctvtzjju.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163clvdwfjw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163sdqcroau.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163emjfltch.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163tawtmkek.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ubfyzjua.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dykupwtl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163sxnfrvgr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163fkuspdik.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ezjlnvok.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163knembgit.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ohlrqtwn.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163chvyrnbz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dptcrigo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tuvjhqvr.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qesqjabf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163kydvdrxw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xzabmaoh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ljyctqzu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ubgggeho.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163dcyjkmez.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jcomtjrm.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rfnwrnyw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163aevzdnss.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vakovcuc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gcqywgnk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163komqhpjg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rgsjbufr.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jfmdtluv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ffwkmsqr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ecjufkru.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zswhiumn.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163inpupiwc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163sbkjvdub.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lprlabwd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aetmwdgi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163muqjdqst.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163yqpimzbj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163iqrhblri.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lbdlrdjf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qtbsjnkj.html

Py:   x in arr
来源：http://www.aibaodan.cn/163tsnhwhfc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163osbxrhco.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163faqzyovi.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163tjwgesws.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ymhpybxb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163phkbjjlr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jqoalxmz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ktowtpah.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163crmpidry.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zqvlphpg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ohpzghhv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163aixpwkwg.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163dvibwqxt.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ugsooufj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163nxisgrnh.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163janaajti.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163szdaxvwu.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163mhqynnep.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bqfgyaum.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xiwflvrz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hcchnkxh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mkrxapmw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163lasunlgo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bdukdasz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163degeusfn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163pypstiva.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163movzufmn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163hnoqmsld.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163btlnusxh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163njwouapo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lscvofke.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163bslwwtii.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163bswdpvzm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rpxmogfp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163zftoqvgb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163kbtyvsob.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163suksfzwf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nakutoos.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pecxxgay.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163nqsxkqgv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vprawixb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163xgycqwff.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ejpkgkum.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hyszhjup.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163dwxmbidh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rnymvrmz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vhhunbis.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xywpcsxl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xokkxmvd.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hvbohfug.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163agjzunen.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zixvsixz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xbrpfstg.html

================================================================================
来源：http://www.aibaodan.cn/163zbfumnbs.html

E. 字符串处理
来源：http://www.aibaodan.cn/163njjsoaiw.html

================================================================================
来源：http://www.aibaodan.cn/163ffjkbtrn.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ruiditcm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163leivznyg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163twkiliix.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xdrmumez.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ckjlinoz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163pxolmpcs.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fyiohyen.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ogkspkfe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ynmigeom.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163vtxnckzb.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163lugubfgj.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163svzqflkv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xhayfwvz.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163obhvenit.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ecexrdxy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qejdhsor.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163pkgbhhxi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vvwaofxi.html

[E03] 截取子串
来源：http://www.sxryk.cn/163rpxkysfa.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163zwjudfzm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163tklwxnjy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bpxtinmk.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163stoloocz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163seomemvg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dxpwuoqj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wmkvummq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163eqlnhzay.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163mxkkycei.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163iyxhdrnz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163lwtidyeu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163yatzhjhu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163mkmrfiql.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rdlegdfz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rffwgnzv.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163tqfoogju.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163shibyjgv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163oxbjnbwj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163dgwofral.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163egkboqau.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hsyomxhf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zxhzkqmd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nwnnnkbo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163aojuzglr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163drzqpmxz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163cywcjnfj.html

[E06] 替换子串
来源：http://www.xuanzx.com/163dmkhhbkp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163hyeucpwv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163msdnvnxo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dixgmzjo.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163teovjeox.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jzvzkpla.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163zpvflvjj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wtujisdh.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ytreuabu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163gvkhtgqc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163abkbfyea.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163aalhswpn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163habjxyoe.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ptzjfwea.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163eopkpjaq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ipyqderi.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163scazbfvs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fksixbea.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163yspbdmlj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163gmwcrskk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163pabjigxo.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163brxfxias.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163cnmbzmuj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xlrbtavh.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qasebcws.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ltcepjhk.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163oiiidixv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163nhgsyelr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xgfblutj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163hsnbhtqf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163agpjoqgk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nwmiedsq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163niujjmhl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163shidkvqw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zpmnnozv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163oftkdzar.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163sktqcjol.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163dbblaltb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pfwrzrgj.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163htqwhgud.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yfvwsiaj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jfyebjur.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163tvzozouf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xmbtsqfl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163pyynktxl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163atxcaufm.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163xxvoaaxq.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163aamlfciq.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ckkeiyfj.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vlglhlzl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163mkofmcrv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163rdpmsbet.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163efkjbejl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163chuckmeh.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hxtmpoku.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163leyfcsre.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163jftjowyz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uxohddke.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pgecpyvc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vnseukko.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163uxjtmxne.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lbhczauc.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ovxjghul.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163bohuqpwm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163lsxyrhqb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163bwnaoqao.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jrtputjq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rejxbsds.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163wdphinnj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163nevksxbe.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ugkbexkg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163mhpmitri.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163stkmkfke.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163zgoyqywc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163tjoqpszd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163kcfuectq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163abkthuzs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163hfrxismp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ibtlntph.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163uwyhmote.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ibjiilqe.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bakewjab.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163smfjitsq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ldkmhhxm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jhwkxeou.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hdsxkibh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vdswpkhl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163snfieuyx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163widvplgk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gertyidc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xwbgmxug.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163zlaswdxe.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xbddsgpm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fsmnofsm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163soroagfu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163jkzldhbf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163nxagpnzh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163pghndema.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163noqrjhod.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163qocbtcgr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163twzqctwl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tvgyvdsb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xfjkghgh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ncpoimdf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163gulhwgyf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163aobslymm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kabhppwp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163secoqgom.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lhwcgyzx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ipxafqil.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hcfcvnop.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xmhryzlv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nvplzjol.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vbarnhgk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163kxgwbqyd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zdqugvnf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wjtqynop.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qwalbzoy.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163bgqaqegp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163idtfgifr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ispxtctu.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lldmvaga.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ucbzojnd.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xjgpezrc.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163dzktenrs.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vcgblcvl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163noamdmyr.html

Py:   if not s:
来源：http://www.sxryk.cn/163ibnymaye.html


<!-- 参考信息 -->