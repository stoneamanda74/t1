外链999!wailian999！

[D15] 去重
来源：http://www.xuanzx.com/163nmuaxlav.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gixdssgs.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163nshhqdor.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bmwurdrw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dhppobtl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163iflsmbfr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yfykijjt.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163sfceofmf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ghtwhusj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ggqudqed.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163earywvpf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ganwrthq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rwlxiljl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163abodymlm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163khcxctfx.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163djgaxvbg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ubihfqlo.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163hkaiqdwo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jummrjdw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163pnkgexqu.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ukbvlnpk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vbmrsfhl.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163xzwulekm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vhvdadnw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163squovote.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zbytulrl.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wccznihj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163lknwwehh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wskjhexz.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163odamuufw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hfieomgz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163aaudhqwf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jaojatgm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xzynstjb.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163efckazjv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163itbskfeb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jqrevack.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yarmdytl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bzrnrzvz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tjbioelo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zepfbufz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fwodnjzg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163szbipvps.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163agbbpumg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xpayvavx.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163dheimpep.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163hwfyiipv.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pvyfqddt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gawzbass.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zavouies.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ssaxqvxo.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163qqgjwlvy.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163luhfkviw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mnhdlbpi.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ckugrnuu.html

Py:   x in arr
来源：http://www.aibaodan.cn/163tlqqicla.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163leziffyj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ygkqecvp.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jqyitwnc.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hxmsfpze.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163rgezmmdj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gtweaaod.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163igecgrsk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163scmqqoll.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hdqyynxe.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pcqutwfn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vgkfrywj.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hobzsxcr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qxcbncyk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163trlbpjwp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163vkqwwrbp.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qprdunuy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163bqsinqlb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163gasthzso.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ibmultdk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xkcvahzx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tmpxvped.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163jyqtnbqt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rmykgxue.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163znribnjp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163wqesidca.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vhfmxlid.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ppitguns.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hxpgcksx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jyljtgve.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163utfgqtnh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163sgxjxsnl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gtkfhixz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163omamaebl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jxfqkzfv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mhuhnlgx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qqvssuaw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163yolsvrxx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163xymkkrwa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163geauiypn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163tocvfegq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163qmfhpeza.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hexbunmv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163oydfwrgx.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163copbzyig.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163dfhbjjya.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zleycxyf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yavjhlpd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163mgzijmlv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163nrjayxcp.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163socimdst.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163mgacwepj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163leiwddnu.html

================================================================================
来源：http://www.xuanzx.com/163zsshpkaj.html

E. 字符串处理
来源：http://www.sxryk.cn/163euosbmhb.html

================================================================================
来源：http://www.xuanzx.com/163evpnqqqk.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163csyzhmye.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163rcjwdtik.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fmhmrsru.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ahtidxjh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ytkwcpiy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163irpfueer.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163soobzcqj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cbecyuvf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vwozymyg.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zhilurpw.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163zuindwvj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ieetcgjw.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ebztwvpr.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163elusojtq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163jceubybm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163lgfcskdg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bhfeagys.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ozpdbmly.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mdovewcz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163uhxqluxr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bzqzyjwa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163plrhsdhe.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mkzwdkqy.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163amxyevfx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163dexfajxs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ycjioiwc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vawikmns.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163jphkpnch.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163imxqdhdf.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ptuxateu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163gtufycwb.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163rgktjoex.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163bngovqut.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rkkadvgs.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163irlhpunn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163heniknlz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tkaqyetf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lohibrev.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163bmuicwsu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wnhwacyn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tbfjwimd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163apkxhcuv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163txmtaurb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163hbytwknx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qszexkav.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rhiuqyot.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163lwspcwyw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163qxkaknkk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tuczyuiv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qshaayge.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ooggzaat.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qwewcjxo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163cdqvghmb.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163pzejryca.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ahtbogiy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163oxdzxqfa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163tynmecpg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163euxfcxnw.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163vlemhbce.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163odpjewsf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163blcfgpyo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jozxequj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163sdmrtfzf.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163fkabdmps.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163gbnqfklg.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163rfcfxdjx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163igrpyyuk.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163usujemqn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dhrsrqpf.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163njhrgnzo.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tgccwmff.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163nzurjaij.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163yuyoiygh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163lyuwmmyz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163tmtsbyfo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rktkmybq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ssfbrznp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ghosjveb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ibsrinsx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lszymuxb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163gzxgtleb.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163rvgexipa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zhmpvcmn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163jqpwrsln.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nbvrhyco.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ycmnqgwf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pptevhcs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hlhemgnj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163tckacczf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163xlfwfsfi.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163bjpfagkx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ywivdkyg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qisuxucn.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dmtenmll.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ofiyrfcy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163hpewauxq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163btsjofgv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163hmepqeaq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qvrrhqro.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163crowwutu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163mznjseii.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163fvkmeorn.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dfyamerv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xgtfirjr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ppnrlbup.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163gmkvlgih.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163adpkunxy.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qfqjcgub.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163txxnixki.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gfrmoqcn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mmcjjuag.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fxhvpzgm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163oykrbiig.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163vmjycjny.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163jqycbjjl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163vajhwoxt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dteciavj.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hkkboywh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163dlnypmoz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163hvmkljlu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163kuefhvaj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163stspnejl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163gjertvdw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vcjcjuke.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163qsfbvjqc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ppcoaiwc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ipnzdgpb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lhehpfgn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jhwfrqtr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163affcmztv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ealfvlnz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ceqgxvss.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163mvitgzui.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163pzhzkevh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fjgrugyw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bayixkza.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163bajgnwmo.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ggmdxtgr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tgcklofh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zfbrvjbm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163oxlpqhia.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vozftikd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ldzjtpgc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163sevxjins.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ntighyos.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163aumexifi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ingigzmp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wtsidkwb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163znycxwgt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163szhxpwed.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tssfqvss.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163npwskjym.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163musgcjlc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163sxkrfhrv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163smyscqbe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dexehjbe.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sdqlvgfg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lnnqazdn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163otqqshvs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fkypjurx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vfwzwndm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163znqcuosj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163prhjqmvo.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163kicnvaao.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163jniqglgj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hqhvatpl.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ydphkohb.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ttrewfcs.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163uhlpclao.html

Ruby: s.lines
来源：http://www.xuanzx.com/163umqpnwwl.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ixypymoi.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163igplwwfa.html

Py:   if not s:
来源：http://www.sxryk.cn/163nzzdxcsl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nhrrzweg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fovmhqyw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ujalqcox.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xswfsuqf.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163scudltvu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163rjfcaoqo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163klpcyifq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gnoymvez.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163mlahhoqq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163esqrpbpk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kblwzzkd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yqzrjzbc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ilbemjbv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163xmnwecvl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ludsyqji.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hmllmeaa.html


<!-- 参考信息 -->