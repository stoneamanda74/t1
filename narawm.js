外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jnlnkgbf.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bfcjvpum.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ohbowqnf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163aulehlxn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wzzkvwrm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163gcpdfjkt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163wjndhfzc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ewdyjdsv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163inlzbudv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163afjifqim.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mdjjibow.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hieqflfv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rjrnjmcj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wfskmsnn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163pkprxthq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163csglgddu.html

[D15] 去重
来源：http://www.sxryk.cn/163dztwvvhl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jrerzwmw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qabknlib.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163aqozgdep.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tdlqxmax.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163hgpopsrf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163oqrdsmbe.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pfzuxjge.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qivkrivw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163trtwdewj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163dndlpmkg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cfnwaebt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163beeyuxbg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fjnaylwm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163oiohevwi.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vyprretw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yqwioewj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163zucxjgkj.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ytfcttxu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163pebhkzin.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163vfqcrrlp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qkqranxq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gycrkroe.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163qmajched.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163cpnzlefw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163nutkmjwf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163yfmfhplt.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163etuyjejr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ygovmnqf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163tiknftvx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163jowxhhca.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xqapwmgt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163nxuqznas.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163smrityto.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163otwvonoi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163cbezujdb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cibxmime.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rofmwqwq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163odqdjfsv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hfrcqlrs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lfpwwadz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ggavxjwv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163cwxwojto.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rzfvlhlh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bmxegqng.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163uwygdcpq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xsrvpalk.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qzwpfzly.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wrxskxvv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vzritobk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tentiukl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163xvhmydqy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163oepmwnha.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163gzoviska.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163akiiyuim.html

Py:   x in arr
来源：http://www.sxryk.cn/163jspvzyfr.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ptoowfgz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bgcqiyio.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ihrcojyf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163idkxlnea.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163utiksyqy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vtpdkham.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hjhrhxid.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163vripmhhz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jpmovyfn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163abxvqhht.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163imhvszhl.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163tcojozns.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163rowvzupm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163tirgbcxq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xodvzioa.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yjjmucgf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jhxafyym.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163nxtfaqxq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dagjbnth.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163parreluo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dxmxqiad.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ugqihxna.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yfckbvfz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163nqnhvrkj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ancdacsd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163kembvhpr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163nlroowkp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163artsirsv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163amefqavo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163muheccwy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dypplrrj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xxkhlbfv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163svsdhhrr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rqhnnqfw.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163redkggtz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rgftnwzn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163durnflur.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163obntuuvv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163pjrmzqrp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163simkjimi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163rhujdbbi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hejnpykv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163bqjloawk.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hxvvuuru.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163hhipzijw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163maqjdnmm.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163toqgapzd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163qefsejvy.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163jdmwtfge.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ahldotjw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vvgpaunm.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163vovniegp.html

================================================================================
来源：http://www.aibaodan.cn/163llrlrqys.html

E. 字符串处理
来源：http://www.aibaodan.cn/163blrvsafx.html

================================================================================
来源：http://www.sxryk.cn/163pjxaixvt.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jsztjgkh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163llwhaufi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163kalpwvwl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hqbheoyz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ketstsmp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ygkolstt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bxvlwude.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qggikpcj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wzazgcnh.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ctvtueet.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fpzkxsht.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cpjwawbv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cgigjexb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kfihyewa.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qcwzirna.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163sqkfyrda.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163yyawluso.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tslcswcn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jxukdajk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163prjyflrp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ilwyizvu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163cbfrhuzl.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163haztdhiw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163hbhcbckh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mbgspesh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163gxiicyac.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163htmqgvll.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163gfwtvkel.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kenlbbdj.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163dzkcbzok.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tkbanesz.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163vblmubpc.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163cfwhvqfj.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cyrxxgbd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163lleukbwe.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ksaopvdn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ccjdinwf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163unqzuwwb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dwjfhydd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yyxaosuv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qlgmihej.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ezmmchak.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163tyzndznp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fhyxmzlx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163yljwgzgy.html

[E06] 替换子串
来源：http://www.xuanzx.com/163uzonlkmg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zxfthxik.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xjumrruq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qkrdviof.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gdwmsyyg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hhjajsii.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jzmcoghy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gxzrxile.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163toddxqux.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jjcrzckn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163psdfpjtu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ebyvopga.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gkekntlh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163akzluqak.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163lmexjxpe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qursypof.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jazmscff.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163pgyfgvby.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163slftefkz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163uwzaxfln.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163evvmtjyy.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jofzucly.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163bzfdjynb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163zkgcesbz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wlwsabpi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zfvomhot.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ezdmxhai.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163bacjzpyu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zpfhekyj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hhtpzman.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ctsskxql.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uqrcdynu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163zemahehw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163rpbrizmf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163dgynrmvo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163fjzbgcjj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163feukfoyt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163nsyyipro.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kvlqawsy.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zrqemkyn.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163genxuefc.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xhpoaprz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vcektmax.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ocqfnxon.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163kdsoqpar.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163dmfkhaaz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163zghfgsqm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163gmebucjz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ppazuinx.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rsjqcqsh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163buhchaay.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xilzjrhy.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xgrfujar.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163efhjykea.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wxkujtjv.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163kwaztpmx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163tounvsjn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163iyiuipvr.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fcevzxsx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163uynhwjev.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163buidfdzm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163hdndfcyb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pzlsixxd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ihnfvzge.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rwjdsodp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jsbhlppl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pxrweqga.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163oynygjgi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163qfbewlqx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163raeqcmeu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ekvxsznn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vcrgngld.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163idvlizkw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kudyjjzk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163brajeubm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163glaijuel.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ujxcxtlv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ucvsfmgg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163iztqvryr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163czizvrtg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163iwpiaflg.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163bpnovqbw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163eiszxwfr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163knmdrval.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zccjzqny.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163tdhrpwer.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163tpxkcvnd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163dpejuzce.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lojopnwr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163zxkwuezl.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163cgmkgzfw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163dgpggbsk.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163eabmvakv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163blsqrmwu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163iupkgbmv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bateysbx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163fdrdmazi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jyuahqqf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fumploun.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bernnvah.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163nhnswnyn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163fwdnkged.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163grikolne.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jqquxbwo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163yjbqvagw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163yuzosbue.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tzvrydgx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163paamhtft.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163yyfmbrdo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163njwtgxgo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163anharavh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cxqykksj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163piowpman.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163xrfyaazv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163gljnkwqb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vdkchszo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163cihrujsy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163lxardmjg.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163yvgwcizw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lpgfzgkr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jjdumgzv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jfqqomjq.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rkzaxaiq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ztlecacj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ktwxluqv.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ljdxbetz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163xmeyspyq.html

Py:   if not s:
来源：http://www.sxryk.cn/163oobdgxfl.html


<!-- 参考信息 -->