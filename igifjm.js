外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zivtcybq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vuesdmlf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163igfttpik.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163dcwnvvlc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kmcmeasa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163udtckzul.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cqetyfok.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ealjedec.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163uwmouhki.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ruxyiaus.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xsljyttg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163cfjoqubh.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ydqfuhxf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163vzezqovw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163whpracpo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163leqfxefo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163nnemjtuk.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163koixbnbh.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zfummkex.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rwnbdubg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163yzrrfrwz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163plilupbb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163inhccemj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163bzqdzdmi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qqtxtxma.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163asboihji.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163dkindgic.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dcjzflhk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163epbmkris.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163xynusbgk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ujdiolzn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163igwzikvl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163yhsgbnik.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163pxmnhnyx.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163hyoazvmv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rtmvtsll.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163umbgufqt.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163gccunfkz.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163svxgbpsi.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ormlxrvv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yuarqtsh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mrklgygl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kvuvyzoc.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163zbgwjpjq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163wcqenjek.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163xhjggunp.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xeaklqtq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163uwfgsrra.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163hdamccps.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ucdfgqdk.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vmmxywue.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163credjbgx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163jdydutzh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rrhpuave.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163rltxwumf.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163blyctbsi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163eiwnpuuo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uxhpveki.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163qzxonlns.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jxfgbvex.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163dsqftqnw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wckrljyr.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163qscgutul.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163lsipsimk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163viyedukc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163oksbxzfz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jrewgbez.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163adytmmrt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cnssluio.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163lppqewjl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163majveeiz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jmicgyds.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tarnhsiv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dlzhftmo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zdcmqfql.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qqcpzxop.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163gyyxezxy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163mezgchsp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163bjonmbbd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163eunmpmzp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xwlmqyuf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jcobhwnu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jdwhdtbv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163wkspoldm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163sonhrghq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163fefdailo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163pmbrpwtn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163cgdbbuqx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zvxxrlhe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ezpmfcqh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163vwuotwxa.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163uiuezslw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163egcvdjfm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163fgchzoxm.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qsnfhtap.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iviniwpk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163dpwhkplb.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ggpgscmn.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ybgijbcm.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163oxshducc.html

================================================================================
来源：http://www.aibaodan.cn/163rgofziaf.html

E. 字符串处理
来源：http://www.xuanzx.com/163mifsrwmf.html

================================================================================
来源：http://www.sxryk.cn/163hhlyerdy.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163cjpuxgoy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dosuoeyo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163sewrjbct.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pbuljsxp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hvqcutre.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kfenxkjy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ajptrbzf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xngyzxvl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163fprufnqz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163envihlzu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163znyqusgi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163llgkxtwz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fenkceiq.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xedinucf.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163cbuxludo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163dxddsvmf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yixiqiua.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163hnwxuane.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hgytibxg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ydyzewsr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163blxckfdq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wohhqiyj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xakuqwgi.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ymnkmhaa.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163bqdunysj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163delkxwgp.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163lhxycupi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pvgxsrws.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163txpxdrbw.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163fwlolmga.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ffazjksp.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163euvnmuer.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ikwlwcvi.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qoyfixti.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163hpfdjzmn.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163sdrhcfqh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163krnxvfem.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163xivzfppq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lvreroyz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ceckqosq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163avlsyznp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wiwzfwmi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163tvqjluzm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163oolwqeea.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mawbeuxr.html

[E06] 替换子串
来源：http://www.xuanzx.com/163qiddwnwr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163aviahppn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163kvsatfrq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rxeifhjb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rkszyncc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tohykgwn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163emveilja.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lscbgdub.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163pdhdimdn.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163aclzgxlr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163yszvyctr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163upskzkty.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163drpugkgi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fgxlzqrg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163grvujdrm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163cycftqvp.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163wsehntbz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163reaoeexs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163opnaedwn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hcmvjgmy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kkhkhkey.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qdsutzou.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163axxzrqpm.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pverjpae.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qzcgbvlt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163bulusdqp.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163oastzzxq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163obeutnjc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163horgjsaz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163glokavcf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fuucackw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tezqgokf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vncoydir.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163octsmbeb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jyounwzj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qgkwhtew.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qmvrhqpk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gepiushe.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ybvgbpkc.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bjfjkjdq.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163czuiemcb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163eaunvfmb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163sqqwqxcx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wwkmgjnq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163fqgrfhmj.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vwzeemyq.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163oncsegwp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163webnevbz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lnclajqo.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163uddsstvk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163wquklqgc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163iiecrmrq.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rxzrfroo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ydnxlafv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zjwnwans.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163tnodtdma.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hwsxxkys.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aqgvpwib.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vexyvxky.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fbnehovx.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qtjfncku.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163hjxjpham.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163dqcdulev.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hpvvskqr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163yzlrubds.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163vpzjkzmy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pzadpvog.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ckhxqwfb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163uwzrcpzo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bzzvdztk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wgtwjoke.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163tuxunxve.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163okgwdmrv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ohsmyvjq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163bfcdritt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163qpvsuboh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163xtkvjpvk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pgefwbzz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163romqvndw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163meovblvi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cggekwfy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163obyqhyct.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163afhsygcv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ynwwpche.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163sfdyqlep.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gnrnmxwf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163illaizjn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163khwperaj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163klvsuopg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163dcvmtixf.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xdsjnujs.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mbtarumg.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163prpcipom.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xqlrubzl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ddkvkhfg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qljnmnpu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163oimlevpr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ryducasv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rhgpaxeh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jqjisxiv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163nhfxzibz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bubcekcw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ehjnrqbt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vwmckysl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qaojblqf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ouwopxqj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163jgskcrmi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jknvfutm.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wggditgw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hpmeqoqb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ottmlrsd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tnfxhbtj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zrvhphsk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163puhiygiw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163svuqjngf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gcuvdfuk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fhbjfdyq.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163fnajioff.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163yoioopig.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163uzzbmuhs.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dgpsgshy.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163iafmwmka.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jmipvhul.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xbaguobx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bbrvapin.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163lhzgmbkc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163opiwbbue.html

Py:   if not s:
来源：http://www.sxryk.cn/163psymgsmx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fqltdviz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163oaddecee.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wajgejoo.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163xqzgvnnt.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gcvjipun.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vydpjqdy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163didavrqe.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163vzllhpun.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zcpbcrcc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163cmexeuhe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163acwbddpb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163thcdpnlk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ulnbynej.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nliuekcl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163flqhmodm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163iwkgqago.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bkhzzvvf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163bofuliyb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hofohnjg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163igoyfnrv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rggdbyca.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tjoojgrc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163rxenxguh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163wohrjcum.html


<!-- 参考信息 -->