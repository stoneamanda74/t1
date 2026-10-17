外链999!wailian999！

[D15] 去重
来源：http://www.sxryk.cn/163psormyuy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xbekdpis.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163yzhbbefc.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zhpynzdj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pfphqnmi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ymyjtmiu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163gojfnktc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nlemgbfx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163sfhdztfj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uhwrjvvl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xurwwjwj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163amzaukgu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rktyekuh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dseiirlu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lhxzlnpu.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163kmptlygb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tbqyqyoe.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163tljfuitk.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ugcvkacs.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163cuitbsew.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163nfaiwlwk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vtiwuaau.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lwfvdqdn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ibtehshs.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163upcatayg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tndauppb.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163bzgntmzs.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163bhikfaum.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163zsgbuece.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163clcfmthl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163syrspjio.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163robrcifs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163rxznenvm.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163staqfhxw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ahuzmvgg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163swksjwiv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163yqfiddcu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mipawqcx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163cqcmicss.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tosthvld.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mahchgzw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163avulcqtg.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vezewauc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bsszveph.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163nlnmtcyn.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163blnosfig.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rafjpwbz.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vvrbdnah.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163scsgccbn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163edefsvhi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ebxzjsgv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163lqbylytp.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163sdjpvokh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163cgshjhco.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163bwffflfh.html

Py:   x in arr
来源：http://www.xuanzx.com/163jtzgdjmi.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163hrzehbkk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ktlbzlqo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yuyzxzah.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wyxswxxd.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mpdayeqx.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163anfbehrr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fxerzzgk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ifbrnxxr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pbgvfgcu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163newyhpbs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jnjakxin.html

TS:   [...arr];
来源：http://www.sxryk.cn/163zjyyeaud.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163reihzzpl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qdwsvncl.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163mqxhetcq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163osviymci.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vjaysoul.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qhpprltm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ztdqvyij.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wsgiiziz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163igdlmaox.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zmdouwca.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rsvuumja.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nbdvuhfe.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163kommtxfv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ibbqbqzm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jbgoxxkx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ivgltfvr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163netjgvxo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163mlantqkn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163pfgdszok.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163nrterdty.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163uuaketqq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163jxaudeua.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hyciqjxs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uttfaxme.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163pkcfdkyp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163gmvgmogt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163yndvbjpy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kmulssqg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163gkihbxqe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163yzphklyq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qyegyrsc.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wzgelcyz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mntbyzqp.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fvpcgcek.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ugcvpbgi.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163esobvobr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xurvqkmy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163sdyhbajg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163sotqkenj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163bkujylun.html

================================================================================
来源：http://www.xuanzx.com/163eofustel.html

E. 字符串处理
来源：http://www.xuanzx.com/163owcajznd.html

================================================================================
来源：http://www.xuanzx.com/163sdryevhn.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163vxlzlygt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163uivhmjjl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wpqbmwgl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163eacuvsra.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pdkbejbp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zgnlpwpo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163lddjxwwp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ihaekrxd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qycikmkl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163picgbbip.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163cmubfxin.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lbwwipow.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163flicrmno.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cicjnywk.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163mtaxiacr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163myzsxawg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hqzfwwwp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163yqgqxvmc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163npytcwrm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163uzliccga.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163yjzuvncu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163fbbqzmbl.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tyhieonh.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163xbhdfjvx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ibisldnu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163xbqucdgn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gaonnlrr.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163cgrmzgme.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mtwumred.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gogedlbt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163dijgajdo.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163tapobukl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zidaqoxa.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163mjbwgjap.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vhnnddka.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163mstobgla.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ltfnfazb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163eknbvlrc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163dlkipcfz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yphgcvwk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163dvtycblw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ylcwbwth.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gadjefhc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vfyetrnv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163lnyosndk.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tguqfksn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qgfiqpph.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163pjuxqppl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nrmmlfjw.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rsuhamfo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wqozogbr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163rzxgvmti.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163bvsokhfu.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163syacifgs.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jdhixbme.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mqaysxnq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ruzcbane.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xlfgayov.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163gksapbrj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163mekaixod.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mqllhaca.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mzthwuzk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163mkxuyvvp.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jawpuxpc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zpzvdzxf.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pxrdryum.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163milnliuq.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163inmwvtni.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ubfzrmxy.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163nwygxfvk.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hjxymtyf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iekvnvjc.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163hxayxcny.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zipseunj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ormbtvlv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163upekrlfr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163chratlnf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pqywtano.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163uvbswvhw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ogfdqore.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163pedaijyu.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163dxmtoyqw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rzabtwvl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kuwdbwns.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163foxwngyz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jfzekbdl.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163csecnijv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163giohbizo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163namfytqv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163yowwqdos.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163xacykfbe.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163oibogpwj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163llovcssc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lopxqeqn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rbwksjdo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xgochxle.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163edzygjkj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163uyzaoiyx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dfbgajlj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ziwampdg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rzczljxr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163rytumbfn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ocrarslf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ctfkzujr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163cslzetmh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163btgpmqpj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163etodufrv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163bkqojsgq.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163affzoyiy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163blwssmcv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163tknhuxyb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ihzawejk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qkystdsq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163xwwkftkr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qyjytaaa.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ekvrghcm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ibfggfyt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bfhhrawz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163reywxrlw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bfnhzuga.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163algwxtlw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163cqazqhnx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163aczabhap.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163zwrwuzso.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hwrspkru.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163aeddmfja.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kslgojlg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163eonhtvsj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jauswmfh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163bjccuden.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yrmpvxug.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ugjwnymz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163remditdh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163sjkmtzzh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163oiywbibz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163awxorxwv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163uvhhuhvp.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163hupbiigr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163sioavfuf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163przhitel.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gpwmvfwo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163bpyfdsmr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163acgtnyod.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163anpropgs.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163cxrgdabm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163oxrrqchx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lhmrjgwp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yhugtmwa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fxmgkslj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ijdigqsm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163dwuixajn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163wuxzzcyy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163toxpqdnz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163heegtydr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ktookard.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lvkboixz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qggahrgv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zpzcqqew.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163asorptci.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vhxhtttd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jphiyykm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163avunowho.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wghcpcrq.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163qmsgmjax.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163yhrbujya.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mcukkevw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rertutij.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xddyxdzx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163eqlzbkeo.html

Ruby: s.lines
来源：http://www.sxryk.cn/163siqckmhf.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163lmlpwbfu.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163yocjkesw.html

Py:   if not s:
来源：http://www.sxryk.cn/163vtdavrtl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163evzkypyh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ghvvupwq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pqorrhdr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rjonobmo.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163snxipddv.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163heotsgep.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rdqrydya.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163esxrsuge.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163wzwcnaxb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ufxgbksu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nvnhelpg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pjizcesx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163retkhjoi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163nrozjxxn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163aozlcwmi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163znyecktv.html


<!-- 参考信息 -->