外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rbcfkyuy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pneyjioi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kphrlhjk.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163brifsltx.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163bgocvhxs.html

Py:   len(s)
来源：http://www.xuanzx.com/163clxjchod.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ttyodyxb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ucltsjzp.html

TS:   s.length
来源：http://www.aibaodan.cn/163pbdqtrka.html

Java: s.length()
来源：http://www.aibaodan.cn/163vdsmbxje.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ktxctxwm.html

Ruby: s.length
来源：http://www.xuanzx.com/163tjxbwdvi.html

C#:   s.Length
来源：http://www.sxryk.cn/163xsydpjcr.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163pkvtbctv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163zvuzmguu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163jqbxnwsb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163kxlebubx.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wkquiowl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163oytmhhca.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163qmamxnaw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163yvgqrdqg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jgyesusd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163zmmatryp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163bygrwlvd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163qlzjhqek.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163otlqlsed.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fvpdnxhu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163jkayhcxs.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ryfiehnp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ypjnfyxp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163occnlmdb.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ppzveqki.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163iyuuyocb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163fuilqngq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ycqsvpcj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vrjzahgm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163cpxvpgzq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163osnikias.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163chumacgo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163paexufgd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163vthajyiz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163rwqftnje.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xirgjnlv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163qjrmhypu.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kxkaflrg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163kpgqrdjt.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163grtzcdhv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163vulhrksp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163uzbowxvs.html

================================================================================
来源：http://www.sxryk.cn/163sskskxgd.html

B. 流程控制
来源：http://www.aibaodan.cn/163hanlaojd.html

================================================================================
来源：http://www.aibaodan.cn/163mdihzwfv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163jevatwfs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163sgrjkton.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lmbwubis.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eqcobrbd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qozunpaz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163czypkioh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163alqxnetm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163gipzkgkb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vzsqdvkm.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ainzhyuc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163roemxpom.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163shdxoawo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163unpxccaq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vxqxkjmd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163spiahbza.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xzmyksgo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163aqbyrcjo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dbzjwxdd.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163cnjzjqpu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xtyfeuzc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163wliugwjk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163saiafgtr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163llcfuxol.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gmkwlcab.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qvyarkwg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163pzezhfka.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163qdzedjil.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163swxsvkgc.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163hxksitzx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ihazcbhv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lvezvhxx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bxeurtav.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bxxaihry.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163fevfehjn.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163xhslnhch.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hakrlkgk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ldvzygqg.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163wgfhzdwc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jpmkgkrx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wulydqfx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ixfbqjsn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163bcixirab.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163exlzkxro.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163dsvhqumk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lmbigtar.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163irdlfwil.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163epdojhmz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163lovpoqza.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hvscwhpj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qmploohj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163jsogjxrc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vlhouepq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qhofekwa.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hxqugzvh.html

[B07] while 循环
来源：http://www.xuanzx.com/163izamrajd.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163sjzkidpa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wvwwrdnx.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163katjlpab.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ddawbidc.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tmdcofqh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jfumvmwi.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tmsqwqop.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nnsroodu.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163acdgpwgi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163uudoatqt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ifutsauw.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163welugpvf.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sbzumjvr.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163apoppzci.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ptsptvgb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xspvnrsq.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163evxgfyse.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163iapshvca.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163imknehlt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ynhteuir.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cwhotdph.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ptoavhxb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yvgigmgj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xkvhocbx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jfopqgwp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uhdqpzls.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mwncspbm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lozzeyaz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ilwprxhf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163szeoialy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163htuipjpf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xkagjzra.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163vibuqtjz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163irvrbvbl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mstuekki.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163hfswmcky.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qnjgfdds.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qmakaoog.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163omqkstdi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nmububuw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163uecqjepz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163gilxeagg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qogmfwwq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163llscxhxb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163vnxjjftp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bfnynwjz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wvmssokh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xjqqdaqh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jaienwdp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zgszowrg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163pftrqzjk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163omfdlmtd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fkftdiku.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vjmluhkh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163gbqieuqz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163zjtjbuqa.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zffisghz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zgjejaec.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163uhtlzkbe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xeqrrfwa.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163anuawpsi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163iszdqdgz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kyrvupuv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gkhdwqxt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163lvdgtzsy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ifktwysj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163oanbknqp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xwwwibod.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163llmrufqe.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qwqiyqyq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163achtpced.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mgwkyhiv.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xfechwlw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nbytnukw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163conxvdlw.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lwozwkab.html

Java: a && b || !c
来源：http://www.xuanzx.com/163fhipohyc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163pxlhlxuu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jcylsnae.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163uktojjrn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mzlosppi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163crbthvvr.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hgdsqeno.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163uxgwqwzj.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ghccyatg.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163xomvrqxr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ixvjtuao.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163uobbpagi.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ifofmrho.html

================================================================================
来源：http://www.xuanzx.com/163waputohs.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vlfgwipi.html

================================================================================
来源：http://www.aibaodan.cn/163owrqvybz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163myqeifhf.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163adpgdxey.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163asqvdhwg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163baxitvta.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bmilucuk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vllkgrdq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ruvgmfei.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hwrdfcns.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fyjzctkq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bswabmqj.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ppgiaygr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163tdthmrls.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ohaywpiy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163kyaevjmt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163htwsiqdq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qkdyvvbm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hetiduux.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zuhujkdp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jcfwpdrw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163wwpsiuto.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163nfzcwjmr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wberqppq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kkcefsri.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163acjxndnr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163idpbjtxs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163udvjafjq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163asoekcnr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zcxufshl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lthyouhr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tctmydil.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163vshloxjj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163nulbukov.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163kagkaesm.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163yxiroslc.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pxibmdvj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zdjgomrl.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163uhgbyefx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163tjscrfzu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163zmcdflbi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ahhvmcbq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ehsolhmr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fspjnmfr.html

Go:   return a, b
来源：http://www.aibaodan.cn/163szqepqax.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fdholiej.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163dplamvni.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hwaercha.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163eatxoplk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dpfthibu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163snsuvxxk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163abyezkzi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163uvjbclwf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wmbffrge.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163urrfzobq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163giadcvtn.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163nohzexpf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163adkkuetl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163hrhuzypi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163wcsjcfst.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163dzpcvyex.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163jmtqfrlc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vqvgsmpr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163rsscaddb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163aifuappg.html

[C08] 闭包
来源：http://www.xuanzx.com/163ctsgvvdu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163akmaoprh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163diktdpqt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xcrklhms.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bnzffoin.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pweqrddl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163avdfuygu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wdahxghs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dxifgamn.html

[C09] 递归
来源：http://www.aibaodan.cn/163jzytcztx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wbisjibq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xmsfmnia.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tymwvcug.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qlngaxen.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163znsgbade.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bxqgezty.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163naepdmsf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163fymdyufr.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163neavovfc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163pajhyjgg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163akivebfd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jrzxytdg.html

TS:   同 JS
来源：http://www.xuanzx.com/163yeyamvki.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163omeawlue.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163eeznjxqq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163nsrybhba.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pkibgazp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163bjssxoyf.html

Py:   from module import func
来源：http://www.sxryk.cn/163mkxcakjp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gayywfed.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zhgnkuui.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vcojinus.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ocztzejy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163judzfeky.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163lweoassp.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rabrgicj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163iikxqzrz.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163zrnefzzn.html


<!-- 参考信息 -->