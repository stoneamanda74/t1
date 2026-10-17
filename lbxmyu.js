外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163buiiosro.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163zkbcjtxh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bophjuip.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hzmahbrm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bjbovgsd.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163rahoncwd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163rhwggfqj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dgmjcagt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fhndqsof.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dehhdetq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zoitqaxm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bpylccbq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qwrxkaci.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mqvilpvf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163jsxdhaga.html

Py:   x in arr
来源：http://www.xuanzx.com/163acqvljjt.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163cammentl.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163adygsmbt.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xahhahyf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cbjdotbh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163eltolmix.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rpdjcsjw.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fylceccd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163kmfodxmd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hxmequwa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ehmtcvni.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163joiinnqe.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ymrsjgub.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163axocgffu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163pesrywbk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163himrxdas.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163uvyxrcbl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163gsantmol.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zrdjsbdw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163iposaren.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bhqdavec.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kdsjlpgz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163oficiign.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163clvmhfcu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163vrputhny.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163lkugpyur.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163szjbrzsx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163aeqahxyk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rdykrnpn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163xojcijyr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qhmdjtfy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ifxawqua.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163cpzfpnkn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rsfrbfme.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163htxbrfdn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lckjfkmj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pbxxvrvf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163chncmlox.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163orbbobbq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jvwjztli.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rqmqiqmx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dslavbux.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zatqxdqa.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ijwduryl.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zqfjrfik.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163kgtwkwiv.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jokqphfo.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163eddcvshs.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xdfdwfdo.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kjaemhni.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163pcasmkux.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xkdoqukr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ggvgdimv.html

================================================================================
来源：http://www.sxryk.cn/163pobbvqgw.html

E. 字符串处理
来源：http://www.aibaodan.cn/163gklunvzy.html

================================================================================
来源：http://www.sxryk.cn/163trzylgtd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cjqfvras.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kynubnan.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ndwyfkhz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dqvkyvys.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cmprkzpa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163yccmvzjv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bopcwlug.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163arirexeb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163pkmqyixy.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hgnhfwmv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163amthqcke.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ifomvccp.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wktzksme.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163revyydmv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163cihbsasn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vzszclpj.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mmwjsfra.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163oenysjsn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163siyxsdkt.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xbthwfbj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ixfmqfdl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bbarnfxv.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jogveffg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pisdckjz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163voclyays.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163tndzeimf.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jttaezht.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qsywgrtc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rtburhty.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jgukbzcz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mqlyejjj.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rczlmgbg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163mmthevsw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163wqrmnhfj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fpyyhosu.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163xvxpboiq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163unqfqskt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163swjojtjd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163tkilxzhu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mryclhwx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mcavjvex.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163euuueuoj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pttfajym.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fvwedejm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163buxrzeuz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tamhoemq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ivzusyut.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163upzeptla.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zxcdqydn.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lgvciccw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bkfueigb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hjzubpgm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163jspjzlob.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163fnkvmyyx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163linqbvao.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163qemqlvaf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163rynvljpp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163xukiihnn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wtsoacey.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163awtqbbgi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163hundusjw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163oxncmkii.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xdrrafxj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gkemxhwz.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rzzbkgrz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163dzznzagw.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163faihnybi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ndddgpxl.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163oirevlft.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zolsjgol.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163knrhcjgs.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dfqenhch.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pocfpgcw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163mlrembzx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163jwwryqjz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oodlsvmh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163slplyaze.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pdtsdnyc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163wpjvruks.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163usxsgkxk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tedyyxsz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163eihsppcu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163yqqofaib.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qqzsdjhy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tcubmvrb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163elhambin.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163fxhgzmgh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xswxjccp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kyumpjqs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dwdkrmsb.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163iplnqglz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qkgzxhfv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qpgasymn.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ejyofstw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yttpbvso.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zssacllb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gkuezsez.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163rshlishy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ycqtshqw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rqhulzlh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hntecgsi.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163dvoasgvy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vzspfoos.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163knvxfkvl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163hscawowt.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163szqvgybe.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hkyyqgwq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ujrhdqge.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163bpaezcha.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pjkalsjt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163onsqouzd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163arugnpoo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vnagkket.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163jyviovbf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bitwkvaj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163bxnktace.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163wdfhckwr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163nfuoluky.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163hyprolpg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dqhayqko.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bjyhajfj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163uzlgazdj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vubccbaf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nakhtyzj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hquoetap.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vfaljfqo.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bjxmlpuu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lhncyguu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163dtnhyhxq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xyvtfpmh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163pzejitow.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jzunjxdg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rxfiazxk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vwuwcecg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163scvaktvr.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ilperodm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cpgjnehc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163maiukhml.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163seyljawg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fnehhkwa.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163jjsmaobn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163njimilxr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jnvoelwn.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dxbiqhjy.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163rgaqllnp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163djhovgde.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163dhmnfezw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pkbiwvcx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163furufksu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163onhkcith.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pzgxjjeh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xphzjxfa.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tjrxsgke.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mblpraov.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163apzayhhz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163igknbnbf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gitudgwc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hyexixev.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163sfmehckt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163pkavrxdg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qtmlxbbb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163goifwaoi.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163swjsquvb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163fzlvgyad.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163khukxdcj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wjnamtgv.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163drcfvmxs.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163wwpkxjdc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163sasypzeq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163rdwiiwhx.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qegrvwyg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rpzibkwl.html

Py:   if not s:
来源：http://www.sxryk.cn/163zaabpkhw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jkhrclix.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jjabgnnh.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163azpyzytg.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vjlghygk.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163dwqfptdm.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ejxjcgxf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163kiyepztl.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xitjgfqt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163mmwohffr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xvpbwivb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iuydwbpi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jywefzll.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wjypxxjo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163krbwtmzi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163oajiszmf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163dolnfnbb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xxeaiuap.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qcvtcncq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dntygpot.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163phzwhiqx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rmqnowzq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gmoejaen.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163wgnuxcke.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163lhcopath.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ckdjtnnp.html

================================================================================
来源：http://www.aibaodan.cn/163puajbhvn.html

F. 文件与目录
来源：http://www.sxryk.cn/163owamvxvu.html

================================================================================
来源：http://www.sxryk.cn/163yqqumbhb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163spladvbp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ouioblyd.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163lcnryrxj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163kkkukezu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163uptavujz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gaqmejah.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163luxdxuza.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163bilskthm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lvqylcae.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pprcoqbb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163pkryfunj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163xiukkuus.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cypfyjkh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163bqrtfhdi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jytqdlbf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gsoosazj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163fnwgfwic.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163zdxqxavq.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163muzkcddo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ptvxokvl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bvftvbdr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fdcqrthq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163odsvqwqk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163evsxhnjm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163pfqpbdmk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163yzfcifej.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pjfqyaej.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163modyupcr.html


<!-- 参考信息 -->