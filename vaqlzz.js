外链999!wailian999！

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163tfukjkoq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ndjykaay.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vnzizmnk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bmeqmsqn.html

[D15] 去重
来源：http://www.aibaodan.cn/163nyxktzzi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pdobdkzl.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hfkziuco.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163atkafpre.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163snzjxfia.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163wzdnkufp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163obyaivnx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163cayquyge.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rxxarpgz.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bauluhmc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163dfoynpyx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dckjjelz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163agcwwzif.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dedrvzxf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163oruhivfy.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wlisgkfq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163czdxqmiq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ynpodhgu.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163krlpkfru.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163pzpohefo.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163whwwsvwc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vjuwmcrn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163khzupian.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163jygxvhgt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gglydnfv.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163scfnixoa.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mojvlzxy.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163xgdpabxe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163uoduxhzw.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qqiswqng.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163axrnpgoe.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gaofrkma.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163oneabrbi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xengklzf.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vmzakorx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ypfomogf.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163yklqxouw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tmuxuhci.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rtbfhtid.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pjvnljcn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rlnmdlgg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163lliapnju.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ppwmyici.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zxsqlqrg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163paoknlfr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ioorkvus.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ygzkdicq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163onmcqncr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nxhpdjnw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kmslkigf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zygemscn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ilgvoooz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163uyjofxog.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163blzgvtut.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163wxfaxiwu.html

Py:   x in arr
来源：http://www.aibaodan.cn/163chqemcyc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163djkljwsp.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163jlpysnmi.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163aqdoqiww.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xsbneetp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ejyroomh.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163xziiautu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zzxeicmv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cvynpbhq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163fpgwuudg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tdfwyojf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kvyfgzpu.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jtkqwgss.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hklzzbgt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xbzsxnuv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qncjxoem.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163nlwtinhw.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163bokxtznk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163pssznijh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163vttxiuxz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ikxgxora.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qngrvztf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163olgvqnbd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lhpycczs.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163kpqxdjba.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fiomzrcd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fffttekl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163flvvvlke.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rmxqdbig.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163qvckkzgh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163rkupvxro.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163hwnslzxr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163yoyvvqna.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ahpwqrsf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163yrlkktww.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163eenkwllg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vjyzlawp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mhnuqazx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163lwbygljy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163hgcaqpjc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163srtmvdgz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163vtakonbx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kdteuzbh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163umkwzttf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zxbuulkm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163auynsojk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vfkbfxkv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tgqpdkod.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163eudryvpm.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163mladvtwj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163nnxomczs.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xcvurdqx.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163daaqhxvo.html

================================================================================
来源：http://www.xuanzx.com/163gdzhecvv.html

E. 字符串处理
来源：http://www.sxryk.cn/163uaxspfwm.html

================================================================================
来源：http://www.aibaodan.cn/163qmophdlu.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163skxzgvhg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vhvwjoiy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dpkkhfvm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vgxxyulo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163oblvggnt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163otddstjb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163falsqjmf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163inttznnp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cwjykfkt.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zlalfafq.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163yzhiyxrj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163glyxsrbu.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163somoryhx.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163maixvnee.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163jhfvrevg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163vzrznlyd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mpwtcpjz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tqpzpins.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163bqcuobfn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163sybipxgj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zppzgygq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163mjehdrcs.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163qafjhebh.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gqhkyaun.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xeokcuuz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163nqjrovre.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163aptxrkjv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hcobmrfz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jjlfkknv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163tdmnbcka.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163biagcjko.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163uqprlujl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163uogpuvzk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163hfrwdpdo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bjjuslkq.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163wirigfyb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ttcgfdrw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163flabztnl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rcejtlac.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gowtjqls.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nwlwiqkd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hebbegit.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163plezmhmk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tnkfvxww.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wpjobruk.html

[E06] 替换子串
来源：http://www.sxryk.cn/163zyxcizlo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163kycjqrba.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ikzmczjj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wtdqlfbw.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sczhvlym.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wsnzhhgs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163yzncdubl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hapufmul.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fninloyv.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qnavhmav.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163clbnjsjx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lesagjqn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163jdgnkzbx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pqzyybwv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163uyxxdobb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rjimvinb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163srgmqnsr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163oqzsqxmg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163oxkpxnor.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163rgndhvwl.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163djsrlzhl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163amthiohz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163shwvqpyj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163lpectlhk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zsdjwwcv.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163iunhgdow.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163clrucjfo.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163sdwcnoui.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zmoynwum.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163thuxmhfd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ohvcyass.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fjgaqwpn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163iegmcxsa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gdfwzjfk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vbbuugvt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163zcbuamoi.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163tsqjwoak.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163uhbzlihf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163evsuevkb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jhdxppxb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163garuafeq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163likzbfau.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nbhmmofb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163usilyblv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163fatqytpi.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kxzkwphz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163cqyxpbva.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163apzithha.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gagtgyko.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dcoqatnk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cojvwgvj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ddtnfxjb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163nrulwaxm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ajnymwkv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zxkftkql.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163alqrqtbc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wklyhhfq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bzjkizbj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163azecuspv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163cwbosmix.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163aquvddug.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163fuooiazc.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lhntzoqk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qigkobfu.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xhmscgdm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163dnnjwybq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tsnkezmh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ryzxabjv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tnleuggo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163hcxdtrub.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163yyeulhcu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163oqodzhki.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dhsvgwut.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163dtkuuebt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163cqptihwr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163mgerfpvh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163yfryxquy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xukekznl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ufpuhpkf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ojymbobg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163nksuffub.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163cntonbip.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163tidszivf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163caoblbiy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qbhbddlu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mcwgyzmt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163zeekgwab.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163mqrvjrwy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163csuvcoix.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163flodgout.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ryvuquqg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gfimsiof.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163seslyvgk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vgdbdxbt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hgtewvaq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qifwjhiv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pwlvwowx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jhkgmvsr.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hpyzbahd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zlwfrgof.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163kncowsbg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163edddbyjb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vscuevhg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lzibumqy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163wgxmhgjc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163fnvnrowj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nwxaaiyt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bzvfnaqv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zpmcnfhk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qabmdfnj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163cckcdxqi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163limpjrkt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hqybvqoo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163cpzxgdny.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163bemltxjw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163imlivdpj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163evlwsdmn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163cstlerao.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tmxgzvaz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163auedalee.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163persqyqo.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jcjwejyz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hsqmimzl.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163wqippkmf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163wyfgbthp.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163stxeherx.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ngdmetqw.html

Py:   if not s:
来源：http://www.xuanzx.com/163fxtusjsl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qbmiknjm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163pstghaof.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163xsxtpkxy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ekjevpik.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163lnbigwbg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163syeolkyn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qfxedgby.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ijkdylpo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163imluasaf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163egypmlml.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hooaqmdq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163arywpzbg.html


<!-- 参考信息 -->