外链999!wailian999！

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163dvnessxh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ejmxfuaz.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163bdmwxfzk.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163yqfukuyx.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xpebyvqe.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gnvhzwql.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xtinurlc.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163uugficzf.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163xeaqyuey.html

Py:   len(s)
来源：http://www.aibaodan.cn/163zcnbkysl.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163cytnbmky.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163inyygpaa.html

TS:   s.length
来源：http://www.sxryk.cn/163ymlcdwbx.html

Java: s.length()
来源：http://www.aibaodan.cn/163zpcnqljj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163xbetbyyc.html

Ruby: s.length
来源：http://www.sxryk.cn/163uskomcsv.html

C#:   s.Length
来源：http://www.xuanzx.com/163tvepnijp.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163owmumkpj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163exlobvaj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163nndxncqg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xqpygcxn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vtaxjcsy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gaejquqh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163obpibmcw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163bfljvfda.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163dhmkukas.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163pdmukkdb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163cdwvnvxf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ftgpfaau.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163mznkpmto.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xpjmwlxp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163lsigeslc.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163aaliygur.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163sskpvxem.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163naczrpbp.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163zuszoslm.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163xstdiety.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163wahdkljs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163niodymoi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fdzgslfq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xqzilzky.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fjksfogl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163gadxblfw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jdgchksr.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163fcmleuzx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163cemomcby.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163dpbogetf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163wfoabzai.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163pkmpexwu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163khxaaupx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xosrptqu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ggjzddmj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163qkjzxbpz.html

================================================================================
来源：http://www.aibaodan.cn/163yqnszvck.html

B. 流程控制
来源：http://www.aibaodan.cn/163askcxnxm.html

================================================================================
来源：http://www.sxryk.cn/163yxidtybd.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163gnhuttxv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163oewoyufm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163gmddmphv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pdoiyuas.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163darvsvir.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163evrvmhyj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163lcytaaqa.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163hewreflm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fazqjndx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163irccfmcv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ygonzrxd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ofwemqae.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cpxeogsy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xnmeeivr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gxszjhxs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dgcacyzk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qlqimkrz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163soijnnwv.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vrfoxrrx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163cicgmmxh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ixndgckn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wsfqdgmr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163smsbyfyf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hzhthlkt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ccrpirsh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163srvgaolj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jjrwnoys.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163sfjvvntp.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163oompxyoo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wwjsxjlo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163aftknemk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tnjxnofr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163wtkdclex.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wromckxb.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xftyvbis.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163oniawpus.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163scvyojux.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163brfpvwwa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jhhmgghw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hpusdani.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cgmvbfxs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163kqzujyec.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ddfgmvlb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rkiydljx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163aiianhef.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ckoszstl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lqequbwd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163msvjrlzq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gynbagsk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kematdis.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163xrphtawp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kayxcown.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163atncjomk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ljkbqxcs.html

[B07] while 循环
来源：http://www.sxryk.cn/163rzdjobap.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163dadjbgpq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163uxxlbkia.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163whygoyey.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xgyvenzl.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lwtpsmij.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hqcipzfx.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163sxfmombp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rgbpjgsn.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163rhqijneo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ldwbwvod.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163sgoqbgft.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163burdsslh.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mjutnzfy.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rqfixlmi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163incgfmvz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163zqzebtfc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mvovbazf.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163wfvqyxxe.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jouqjfsr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163btsrockx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wgyovrsg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qpuvpxip.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cizdwmsq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163okgwsmmo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vvartqfb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hwezecdh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vmjlvvdr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163equytszo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163lsgvzanx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xxlljruc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163lgjzgine.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163fmsjppip.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hyoddrry.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ndoyifdf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163paoavwjg.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gueklipa.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163goamkifw.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163eyrdsuwo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hwovjcsx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163trqxjaaz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xaeltlwu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zehiefxp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xodjjeda.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bwtmiufm.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mvnwbshg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rbpaiokv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163rnupmgtk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163acxaivve.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gkwhhcga.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zjubufqd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163sjbcmxgg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163wwehtrri.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163urqvyazl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163seommtil.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163exndtfij.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gzgajtiw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dathtycw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nvpbwlxg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ptylaswf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ggmondad.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163iyownfek.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163daeavgwg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ycnpcxso.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hmtzbreq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dxmtvcnp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ftbmjmbl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cyoxymxd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163qeqjkyvp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ttkoyysr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163axlmwkrx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zpqtgtkk.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163nmnskyrn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163kgdcgyfy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kwnvfabj.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gzllzhri.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hoygaojv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163brixgxrg.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bmhrnczj.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lavpxqay.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jpwssvts.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ztkecjwx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gmvozvxe.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ldyrcniu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ylzhkwjq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163tcjibwlr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ltaepeeb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163bhpstbsh.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kdnifihx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zaarbnni.html

================================================================================
来源：http://www.aibaodan.cn/163lrrjquql.html

C. 函数与作用域
来源：http://www.xuanzx.com/163etzcdryx.html

================================================================================
来源：http://www.aibaodan.cn/163amshpjcn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163vcunqcqk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bewpuuom.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163orttddrf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fylgdzll.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zzzbxgio.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pqbwrcfu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163cujvfzmo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163reobjuuk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163iduixpyi.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ppseovjw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vzauirsk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163cuukofxh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vvsgtldm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tlfqayes.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jvsioooo.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163lrwerdjt.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fmcgbpuv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xtlnccni.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kvynqace.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163erwcmkoe.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163lipccqbb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rstkgdyk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tfctuzdy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163atowhjyn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ujuniflz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163djzrsxjn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163etfhlxhd.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163flbjtral.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163gevyarfa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163bsyucbfe.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ufxdmzau.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163whcknvyw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ulqaywbt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lroxcfev.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ibwvflph.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bhampzxy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ufxdggzq.html

Py:   return a, b
来源：http://www.sxryk.cn/163txrkhdhv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jjlnbyrl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xxcxxxon.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163huresufs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ykbildml.html

Go:   return a, b
来源：http://www.sxryk.cn/163iseyzbvg.html

Ruby: return a, b
来源：http://www.xuanzx.com/163mjscpdnm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qjejotiv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yldwhjwd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163lqxaskad.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163kfpvjlzm.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uyxtqhyn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ngpcjfnq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163biwjcrnj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163loaebjsb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163okneifjc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vzjwsxbi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163islwmngf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ajbayyoq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xiumpclg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163glyhrejn.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lhlmojhx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163hzyzcsyp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ksgecerh.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163yqfqxyyi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163czucfzxs.html

[C08] 闭包
来源：http://www.xuanzx.com/163ueqinwis.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163wqnkbast.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163mamorjqz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wbltfyhw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zculrkbn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rhndpskf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163evyetacm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jguwkbwn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fvxyflcn.html

[C09] 递归
来源：http://www.aibaodan.cn/163ndenhogj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163uzzbolrj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dpqxgaem.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qmyxnxmi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nmziqlpc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163oobrnlnx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163skctbtnl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163gmzzjwcd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hhnacfvb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163pqxskctd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tltflvap.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hrlwqiqt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163tgxopiju.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ycqootpl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163zavmzngl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163lppbepve.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163tvjaexmy.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qwfdladx.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163pyeimzqr.html

Py:   from module import func
来源：http://www.sxryk.cn/163hviwsfpd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jigsicii.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163njfzyfdt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163viwjuhte.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163skfviyhz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163trtqpdmi.html


<!-- 参考信息 -->