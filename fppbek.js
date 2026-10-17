外链999!wailian999！

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163klrtngrj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163aqitpted.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cotvgxti.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163uzklxxwr.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163aknrxrak.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ijtatoud.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nynmoziw.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163rcquxtle.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ibuvduso.html

Py:   len(s)
来源：http://www.sxryk.cn/163iudtwozy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163kactwzdl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163fqrcyeye.html

TS:   s.length
来源：http://www.aibaodan.cn/163qhvisemp.html

Java: s.length()
来源：http://www.sxryk.cn/163etrwlspi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163reopuvtv.html

Ruby: s.length
来源：http://www.sxryk.cn/163jxkrhsll.html

C#:   s.Length
来源：http://www.xuanzx.com/163ynesholh.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ropczbkk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jtjvpcwm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163rspginur.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dxwhfkyt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qqbijszk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nnyfvhlk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ohmfyuyn.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163qdxrthrg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163xukyquqw.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163iqkxuwtz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163trpmubcw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163mzxlyctq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163euyhenwq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qtrgvctx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163nkdcvexf.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163aocrfkdt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163gbiekwra.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xiaktyqj.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163nzxgqkxe.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ocwtkkvx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163engzkfju.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163eidivxcj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vhohkhyr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163vtihiphk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163bzyfyerm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163kgsiygyo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163hgdelaba.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163lshxuohv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163amhcashv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163dzygdsbz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163pncbnhcp.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163tqaxuwtj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dainitug.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163swqnwdli.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lxfwlkqi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163zmtwival.html

================================================================================
来源：http://www.aibaodan.cn/163uegynpnm.html

B. 流程控制
来源：http://www.xuanzx.com/163eahkxdan.html

================================================================================
来源：http://www.sxryk.cn/163kgcgzspf.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163njjnrbgq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xgdtyrsy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163jwzpjtsh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xcyfruyy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163igaqiprd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jymgwbfg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wxaxkixp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163srdfjvmd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163brmakklg.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163zwrxehuh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163dklslcqv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163pmqdoiki.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lnvrqpzz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qloyjtey.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163krsvghzr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163kirrxook.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tkaacaxu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163egoqkzdh.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163tdrspkcx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bmsxigln.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163oikyeavf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163aydixndy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pgluqutp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163mecssano.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163lblhaxzi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kperants.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zrjupvua.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163eifdgvwq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163snwrqhon.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163nhjrxkzq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ptbjfxfw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yuymcwqb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ffkvjsgi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163lvscgcpv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163irybdagn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163iaimvens.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ieciqqok.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163usulcxpk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163zxcppeku.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163llocuwmp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hthhkmeg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kefnxxbz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qxmjpnxo.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163mbpltnue.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zeuunhml.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rckgdxpi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163jgsbfefx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163nfjlossn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jglizbku.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oryugtyf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dxeqkyis.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163eswvkodz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163kwdjhjwe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163lgdqutgo.html

[B07] while 循环
来源：http://www.sxryk.cn/163cgchcijc.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163oeonmkli.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163vurnwapc.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qjwouhqb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yfrhtugy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qwpsnimg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vawszeqw.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ylhtvakp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ktzsacek.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163syfmytzk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163gdxaqzwe.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163nytcpuro.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163utxxnysk.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hrjafdxc.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163etflnfky.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bhotkbke.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163khtughvw.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yirmcfhh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163sziptovp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cnsnsozk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ddzqfasy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ohlrahjh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sqzqsxat.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zpkhkiwh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qvwakjzo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163xdrsejdq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rcvlcwew.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163daackblw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163iiuonyfb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163etmyvqht.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163druyeegx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163vgxjdada.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ywzzqgzy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163vtccvbfp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163xfbccowj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vevvafyb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163whcdukoi.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kmbovkxa.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163gagavlcm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nehbuqub.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mytctjqx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163bfuamveu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163uzzwqcpt.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kvbhelnq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jzktiizx.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hgjnwbol.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163fgreolsj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163rnuitzjk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wozrwnnz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uilwgaoz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yonmmkmx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163neldxyna.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163veujkhzs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163aaxtaxpz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gmqgwdea.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163emwzucbi.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163kwccsusz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rweetjco.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rlhvqqxk.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ywkfpmiu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vtyqvabf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163kwqysdtw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kizgznav.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vcyvqgsk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163nixdwosh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163uktohvpj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qvhcsare.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163axpieind.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163zuiudvqv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hvcrghhh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nsjwhnpm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xownfroy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jrpvqswh.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xmljyvbg.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163rhsfhhul.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163uypcjjbx.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ntxccojb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163lrzuuuaw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wowrhcau.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163aoywnslm.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gypobail.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nhzuftlo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163pfyjbiod.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gwupbfik.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ugrjcoak.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163auuuniox.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163pbwpipbl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163fbtcjyqs.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kimcialr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ccclwhuv.html

================================================================================
来源：http://www.sxryk.cn/163gdofresi.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vlnnyjou.html

================================================================================
来源：http://www.sxryk.cn/163qdatenre.html

[C01] 定义函数
来源：http://www.xuanzx.com/163acxfmoey.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163uqrtfsmf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ioyzctnw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bwbgtbvm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fesybwqz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jhlcidbp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mbnzuieo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163eshpiibb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rkajkilq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163iqvotnbr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xrhccmjj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163oaggxigj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163nrbfwcma.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163afoephxg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ilkrmuke.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163saxkwnjx.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163llitffmo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zfdnlxbe.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wlekayua.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ycscnuog.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ycodpqbw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mfyohowl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vcfekzgx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gwlkewyr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lzisgpqn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xwklgyli.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163fnsatcjx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163iulnpucn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mowwwdoa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163seboudfj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cyvsvqsy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gjexhhkk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163bfgnapdz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qfmqwowu.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dxzalmug.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qcmgirfc.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163tbhqkbtk.html

Py:   return a, b
来源：http://www.sxryk.cn/163eksqgsce.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163knnojuqm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nmuzicld.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xjltzxyt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uqbsahse.html

Go:   return a, b
来源：http://www.xuanzx.com/163kklzgbgu.html

Ruby: return a, b
来源：http://www.sxryk.cn/163aftqnced.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qnexerxf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163egxnnpxa.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163fywpzjqf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163quxybupb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ipboanhc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vgpxuphk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vhorifbv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163bbybunnr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vloblfpt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163umgunrks.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dufnlufo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dttvuuow.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xgmyugrq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163hyrqgvbo.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163polcsfwq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163skndigda.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163lcwluuma.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163jxurfkmg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hfpgkhcl.html

[C08] 闭包
来源：http://www.xuanzx.com/163pvmcxevj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163mtgcnxwy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xcnzoosh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ujxpmuid.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gwsdpwfm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sjblahll.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wnjsqijs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163quowmfsm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kqadgyer.html

[C09] 递归
来源：http://www.aibaodan.cn/163wayermyk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163cxsvmmjb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rczfccbu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tsujdiqj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163prhqirtt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xgboxkah.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163oyunbggs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163idefrean.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zshdmcyl.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163nibkuebl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163khriuvdn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vpolazqd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163nudcftzr.html

TS:   同 JS
来源：http://www.sxryk.cn/163hskhfzsw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163eezdvcts.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163chnbhfdc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163eyoeewgo.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163bgzhbmhg.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163pywfsgbb.html

Py:   from module import func
来源：http://www.xuanzx.com/163oyjlssjh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163innrtwmi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163omupmmhc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163lxtpswdd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qldrumyi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nmoaexus.html


<!-- 参考信息 -->