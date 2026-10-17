外链999!wailian999！

[D19] 按字段分组
来源：http://www.sxryk.cn/163ynqjslxn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163uazpboym.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163snxyyegn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kaoazqqx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hthzuvjg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163bfxposqw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hikvnenz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rnwmcueh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163iocakyhe.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vccpyhty.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163auybqjye.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fmyhdwnt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mzfnlzrb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163owanzknr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163uvknmbwm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ykkffafd.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163itsjidva.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163xynrnvcv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ixhligly.html

Py:   x in arr
来源：http://www.aibaodan.cn/163uxbjewmh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xuzgskdr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gzdlivkj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tkgksxor.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163idhwibma.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ilkmhwif.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qbokubul.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163mwxkmmci.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163nbzedajt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kvrtujqz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163cuwrqjhq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163axwvsqnp.html

TS:   [...arr];
来源：http://www.xuanzx.com/163whbpingf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163shoepupg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163nkpwhdgt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tqegpgar.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163kppocniq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163dlqgpjzu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163djhtrjon.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163zlqiujjw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163irbymstf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vwkarkww.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jgnulikl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dmermtrt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163owyczegc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163coufnhaf.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163cskfpfwo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163fqpzsszs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mstxbtbi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163kinayicx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ancchiot.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163icfqbvpi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163naaygyly.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ksexujda.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dtaxizgx.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163bwmaoabq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163cotafqgd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163vkgzwoyq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163okxuisex.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vnvsbuyg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ahrlznkv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nfdfqsdp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xhlkavth.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163arptrdtr.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163liydwqag.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kjqrcvxs.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163nmeozhyn.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ttasnnbl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bqbnfqmr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ienrkblz.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xfnlqgjb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jhwmvusz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163neupfjqo.html

================================================================================
来源：http://www.xuanzx.com/163qzqsmfhg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163muviyubl.html

================================================================================
来源：http://www.aibaodan.cn/163jirydelg.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163tscksxmg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163uamrziju.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163agvgjitm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163egxlzeqc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163anjadbcv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xxzhbhyl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163zbcrrccp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163apmuwbhz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163hmvaoqxb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rouezima.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fasquvoq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xzvcnytv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tpaeiwph.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pmilgorr.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163bsvscxbi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163iyxupvod.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163bpsukmsv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jwiwsjin.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163tmnkunrl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qmfjxozc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zgmcmmgo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163txqjqszw.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tpvukioa.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mxmcbybw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163erseaeht.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163iwvaanxy.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163bitbskre.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yagfwesu.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dncxohgn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qvnlpubm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163svioodbg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163cqxjbexu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163vxxcxjrn.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163osiymzbk.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yocpuzet.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rkzcytyq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163goqzmzpo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163npwklhtp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ommnjvlt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lsmfpdql.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163stvvheoy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xhmdzusz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xecjwsvr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163hsckgfuz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ltmafjfr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gvatwyhq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163yfgirxhi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163kidlwoiy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xqsavqos.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wtcqejbt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pakqyqpd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163yoiqqipn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163envqdajq.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163oapmycxd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jtdftrzc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ljtuntyo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qlbcztjz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163cxclpbfr.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163qfckjmga.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163farhlqzb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wjqfetro.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ekuydksw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ftyofpae.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163xgodsniv.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163uxyyurub.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163gxeqhvae.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fvquulsr.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163qklplroi.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ahktabki.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163usqdfnqn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rxmzmhwy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163gqrrhgwl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ypekyuep.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163qiwlkcbk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tjbmdbme.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dvtecrny.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163aovytuaw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wdseiflc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ykcjwduo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163rombirfh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163lfyvaaql.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163wmogosbl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163dqwcdmcz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163pbmmzvad.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gviaflpv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163phcvpgoa.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zhyzwrvp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163lmkmroby.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163szhsxlwr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mjiivyzd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163mwgnnhet.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163soupmyol.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163uiobkrco.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kluvavln.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iuklltsg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163scyjtztz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qfqfgjmv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163yrekengv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kypjbtmt.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163vzlatqzh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163elyapyho.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163rwfnziwz.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163endecxsb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vhgirdfh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163cxwtvqgm.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163mvgmxrqp.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163kyvdttyn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vpypylac.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163gjhalbhh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163nqxbpavv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ltbecypi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163oqxdkrlp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163leddhxjh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rpexwcai.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163wplljssw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163dhyjnfth.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163hohtmfsy.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163sqypcxei.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163yuiuxzbu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ngjjxmwd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163arruvwso.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bzfahzpb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163szagahxn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bizetqfc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163uwesismg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163egucaarj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163dzshnsce.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163qyrcuemh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163gejcnwqg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ufevcvbw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163exavcbtg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163okwexrqd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163dspbuvce.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dvjueluy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163uikjfrue.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163nkfubiux.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163scowbikt.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kfyngfta.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hfczikwh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dalrvqoi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163svqkaaxy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163txwrbeub.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rrfqfqxt.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rlrnpfuq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163pdqpfaom.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ypoucxqu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xftzovrw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oobqxiha.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kvqoybms.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163eeykkgmm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hzkhpija.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163emarcasr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wiyptpjp.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163sovpmnbt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qtmileli.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tnvjxvso.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tdashdwy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163otlhbtkt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163xfonhtsv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163kasasyoq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163pwnbsxzg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rarqxkta.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qgjkggjx.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163gwgkfemp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tgjlogba.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163enxrwlxd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kjhhtosd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zcgexpim.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gondvlal.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tadozsqm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vcfypulj.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lhrwmvjx.html

Py:   if not s:
来源：http://www.xuanzx.com/163gbrvdwrf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tzmfeygc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kqoquqbs.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163djuqimoz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163nldntsbv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163qhxcnjim.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163grqdzxdn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rdauoaug.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ocmslqjh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163wmxcrroc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zdblzaux.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tzokikpc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sjlgtjoc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bkngqycn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pbicgrru.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163prprgrmx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lnhdqqjc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163grlkiifc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jetbbnah.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pcruaimf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uxaxnhtp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163anvxrxlg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163iddpwjbz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fcxeopsp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163rohzxxii.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163imgootpg.html

================================================================================
来源：http://www.sxryk.cn/163iiyoilww.html

F. 文件与目录
来源：http://www.sxryk.cn/163exqimcsl.html

================================================================================
来源：http://www.aibaodan.cn/163zvyobkps.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rozcqcex.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163srhpepbs.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163nujrqdik.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163gbiaojxy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xkrokmvh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163psylxqyl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qjtnpwci.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163cmoyxitx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163iwuudpif.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163khrjlepj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163sctyixkp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bozeqjlk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gddbqluh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wkkrogzp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163yezmyzkw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ifeaszng.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163jlerxuoq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fnveivww.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pxbxqlia.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163joyfskrz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jqvizpvf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tkaoympf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cmlcuuti.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163idspmdyl.html


<!-- 参考信息 -->