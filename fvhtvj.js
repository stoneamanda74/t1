外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163rkpewrrs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ccjousbo.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163hystpqnh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163zlrqhyfg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163vbljnlhy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163dfmzmjop.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zqnvbscb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bxfwnzle.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163mdbptlki.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ofrlfdft.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163mmobrmli.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rcgfhwlf.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163wvktvehw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163adzsawiq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vwtgzfwa.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163lhpnixvn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gpzqnytk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163esaysozk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163citgfevl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163cercelqa.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163hrzimpyp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163dagysrmz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163pwxeppue.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qiibhxpq.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163pfjihidb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ipuaphet.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163swfbaouu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163alcmewzn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163snekkrjp.html

================================================================================
来源：http://www.aibaodan.cn/163jjcxamgw.html

B. 流程控制
来源：http://www.aibaodan.cn/163zcwobzci.html

================================================================================
来源：http://www.xuanzx.com/163vcsspqpc.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163nkbqoary.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163dhqshvva.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163obrwxbfy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pwcsripq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163obiythhv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163oeqsnmvb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163omyhsryl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163rxtijnht.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163szuhchef.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163flfjtdcz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163cgfmhyzl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ijqdfnka.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lkflnarh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pnhbzooe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ipbhmzpp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163jwjpgtyf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163bflifaob.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ptwacyun.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163yqtyxhfk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163uljdmggr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163biirdcje.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163htrpgbzw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163drclubva.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163tlerqqxr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ieubrxxt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163paptwpus.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hwcgrhkv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163idvteocv.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163fwhbivzb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163dqaffksy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bqdimnxm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kwgeagdp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163weukkdpi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163kfkbatej.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163azrviaiq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ffiooyop.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163jgfycvhc.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163xlxoxnqc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dznufwnu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bvcfkaug.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xclrbipp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bhrgskoj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vcceffkl.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rjmievpv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163nfglfepv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163kjuwzort.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163szcgwdkg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163chpmxxxo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nijjhgbb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ifozthmo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163oglbinjf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163pchuxxhy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ttxnushs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163tjauccbj.html

[B07] while 循环
来源：http://www.aibaodan.cn/163theofxsw.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rppzfcwa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163bksggxyv.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163brncgqtw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jvhcdtap.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jiawklsm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jphvewfq.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ozbmctmy.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oicueyzr.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163phtoqdhx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163febgatfj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163psrgnsmb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qrliziow.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mvabdcso.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zrwlslgb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163nqnrhrmm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163wibiuvsl.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mgwpggxo.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163kgbidndl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163afpijkzq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163vqsorwqm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163atsrxzth.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yfzwovvw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wyuytfgj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163anoovtpa.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ccmfoown.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163knjrgggv.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163kqnmekut.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163unxtgyop.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mgyxdszk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163dlwzynud.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163xrnzlnai.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rfjwsvla.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163loflkveb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163yykezkrg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nnilzkkf.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kaojwbqw.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163lgfumqbs.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163lefxbtqy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kglnmfqe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uyhlfgdl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ptjrpudv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163truplarh.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163jqtzbpze.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163uhuvqpxd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163wydaauoj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163vzawhvev.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163hyzrylon.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163katjnxzq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yxjkszcc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vnthxfbz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163kqckjvph.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ozabejul.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163aobrgblj.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163yihdiapc.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kzkuqjub.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163kxqvhvfx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nwzlpyke.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ycdyoptw.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163iabfrbml.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wyzkhaca.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163tdcfionj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xfsuqvyx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163osabfzce.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163zbzwicah.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163slsgcxuj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zkuzxujs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163voxaflyv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ngzexgqi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163mtmnaxcp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163zoarsfaz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zcjnrjbm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jtvpxfmv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163wvxcmxmn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mwygfipn.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ogwobnhz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163fguvpvwm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163itwsvasr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163dorcpzuy.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tmfglmko.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jdsloize.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163lxcrnwsr.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mktdinsy.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kepfyqcr.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163qmtwblzv.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163thqwydzf.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xxdnnert.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163dbwktxhn.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vxmybivn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lhpnlhbc.html

================================================================================
来源：http://www.aibaodan.cn/163rnbadapb.html

C. 函数与作用域
来源：http://www.xuanzx.com/163reigntrd.html

================================================================================
来源：http://www.aibaodan.cn/163jqyupfhb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163sxyitvmx.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wyybgguh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hgwqbfle.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wuqybijn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xfpvhzlw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163puvhcxst.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ygcwaeon.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163wyijydhq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uyqwogqv.html

[C02] 默认参数
来源：http://www.xuanzx.com/163lducsnps.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163kabnjsgp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hrosgoij.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yrxctigo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ytsmladr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xwxtvnpa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163usbsrfgd.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163knoimetz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163noiembpi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163nwnaixbb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bygylthz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163mabkelbk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zqtpmcdx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163evxkxfib.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qhdmzolu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kmjteasx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hbdlyzkc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163adlbqfzo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dribnacg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pscktlsc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163jdiusvhj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163oefvojwa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tzsjyqkq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xceclmev.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163sbjtesbd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vzdqnvkg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163oiuxwznv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163teplnsbm.html

Py:   return a, b
来源：http://www.xuanzx.com/163euqrqfma.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163quhuadud.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163pujgsqjb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lbdrysta.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163bxbfcbdd.html

Go:   return a, b
来源：http://www.xuanzx.com/163oceymrbe.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163mpycyyvg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tgpvseol.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lrrzqarh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163pwqvsfgj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rinzksti.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rdkpcyjk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vfwjwobo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xyuzariq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zgncnsyu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bnnywfuj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163riimdelw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163hsalsyby.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wfhengaz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163srrhygzo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jpzokujs.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163cgdehmoh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zppjzkuv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163wmfhkvlk.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163wdgbozwv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vsskadhk.html

[C08] 闭包
来源：http://www.sxryk.cn/163wdvkuxja.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tvfzqabb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ihbkabbh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lsyagdux.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163owzxyweu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tenimqiw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zpjzzkwb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tqkezbiv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vsuauott.html

[C09] 递归
来源：http://www.xuanzx.com/163htxnmcqr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zcouwrgh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163yhkcvglt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163quuofywu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jjbratbg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163parflnym.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163gerbmoup.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lbmftkvf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163otmpsosz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163wzhqejbt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163myegskxr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163rqxnnihw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163bumlcmlk.html

TS:   同 JS
来源：http://www.xuanzx.com/163wyrrdsht.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163iazprrdw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hqcgdahe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163foogtunh.html

C#:   块级作用域
来源：http://www.sxryk.cn/163zlygwivc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163zzvwdftf.html

Py:   from module import func
来源：http://www.xuanzx.com/163uplqognb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163aicztnux.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163eczeusrr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163cuwnaczf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163eawasgjk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163wbeflnuj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163kpqnjcet.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163uhgmumoo.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163csowdide.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qiyvqqwi.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ihqkvetu.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wtchmokh.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fgnmxiyr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ynqvevxb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163dkirsqix.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163rsobdxgx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vkuezcei.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163varqauiw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pqcuozrf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jrczywii.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163jjxstzkx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163uwlazuih.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iokldxdd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163kkxjwdco.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163cyahqacr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163udnywrzk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163iqfsxzvb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163sbsfunrr.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wzludgyh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163emxwpqum.html


<!-- 参考信息 -->