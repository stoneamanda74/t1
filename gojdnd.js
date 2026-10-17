外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163rqwgyxbu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hzxsjevd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163uxmnpara.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163psuybqwe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163aizmxrwo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wzzhgnkq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163kuyqqdjz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fkubgoop.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163qqltczil.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ahoccvjz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163rwxjbnci.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163roxnndim.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163apfcwnwq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163fxnqdlaa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163bxvsfvjf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163dlomgsbk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163iqcculfq.html

================================================================================
来源：http://www.xuanzx.com/163syaiumus.html

B. 流程控制
来源：http://www.xuanzx.com/163kayvbjjv.html

================================================================================
来源：http://www.sxryk.cn/163sbehxqoh.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ludwtpsw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ifomjtlu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163kyiubinj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wtcsvaqn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163szbnttcz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tprvhkgi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ndsawnob.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163uyghbtaf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lwkjhfyj.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163jxgodxor.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163zkgwchiv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ztxnoekn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163obuwityi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xyetqdev.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ttursmqs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zyjiylmm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ucsmzwmz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163phjwcmfw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163tboykaja.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163hbalwaph.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163miuqejhz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163chhaxywl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bwkamlzk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ypdooqwd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ifeizpva.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163yompccns.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jycsjmvm.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163owdvnpbd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nyywcnlc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163igdihrkg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xvkghkdo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163chlailsr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163vbfshqvd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163usvbnvkf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163dhabtsnz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163reslneyf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163skweczcc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163uuywjjsy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163yunuoutw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gxobcbyz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163fqmfmmsu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163yocbelae.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163jpftjrbk.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jzfjzodc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163mlywcmdj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163athvvseq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163dbaqqtco.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163btzqymyl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163cemechvj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163srjpgfyo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163xzeubuyl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ocwtdyxk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wzbmkglv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163qnjvgdaa.html

[B07] while 循环
来源：http://www.sxryk.cn/163zavdgxmg.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163eeqvfpdi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163eawmnygm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zhclbqur.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fxfgreut.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mrumgnvb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ekmdydwf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163upsunwtr.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sndktemk.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163dkwoyoub.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163eplvnoxm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163tbdbxwzf.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vnwdaimp.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nwkdgmwu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dflqmhrr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163gwjszpwj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163idrpeaeq.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wdgvlwua.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fihtdgpq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xuxtgyuc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163whgfdmur.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ijrgczkr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uzymppih.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qrvrigge.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163exbjnpca.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163iatblgmp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zpfoyjue.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vpyooqwe.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163huyogaca.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163idoomevb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ldslucdx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163sihkxamo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163gwmkqclp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163rzioyhho.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163flvoehcb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cibydgnn.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163cgdwfwwy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163kxhbibdm.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163yphgonkd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zumvsunt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zjaxpchy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163pgdhwaso.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163htkkomnt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163fxzyduwg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pkjhoahl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fivdusao.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163nxukzjwd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zdmybrfa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ebuxbxve.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zuqkkdlm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kioldohy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lyftfago.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zvqcpoyg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rkeilnig.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xuuevrlr.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hzqlalzt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163bdespbrs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ysknwgyu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163skqhwxhb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tytltxhs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qgygqskb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163auejcndh.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fdkvyltg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qtzrlpaz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163yjpoartk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rhitacbj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qzdlgwwo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163freviksx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ffcrarlo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163sddyskgp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163tthvfwyx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163adzxlghu.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ygxxiuaw.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163pjzpnker.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163srjdljdw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163uqcvgibi.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163koduamrd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vuarybcr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163xicbtihp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cgfcrdqe.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163gwatqibo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163nxziouys.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163lgfeqgri.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cpnpqpfu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163yplctfff.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163jvfzfqtc.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yebrydce.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163hclbrcny.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pnoiwkxm.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163cdlbvsnq.html

================================================================================
来源：http://www.aibaodan.cn/163aqjocwcf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163pnmzkrqa.html

================================================================================
来源：http://www.aibaodan.cn/163zjpcpobx.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mkzutakj.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163magwedpy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cronpbfs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zixbvwmc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qdmtkgmv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163weavwlja.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yspvsusn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163cmaoasmd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163phrjycld.html

[C02] 默认参数
来源：http://www.sxryk.cn/163epfexhdr.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tpnrtqpf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163otzhbtbo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mfglzrey.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163isptetno.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163eojnohrs.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hjksbrhu.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163mtpyjpbv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163pobbznhj.html

[C03] 可变参数
来源：http://www.sxryk.cn/163cetlwdjk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hxfjiiot.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163uaexidzp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pvsoyyjt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cpxtfzsi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hlpbyoog.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163zohhypnl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fiscnlef.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xhgoyhqa.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ldiollgh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163sthrzlui.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163kbhrpzed.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ciqsrsyj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pxdkpcfx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163aufgppwc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163maadubjy.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163clejmilf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163voxxwhun.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163oglkhzro.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ljrpjdyp.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163tvqmmbfh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kmgokdpe.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163edfnpumr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ydzjsmyx.html

Go:   return a, b
来源：http://www.sxryk.cn/163jvfualaw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lzvxeulu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cssphycx.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163odhngnns.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hidtnjop.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163qnvgnvvk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163rhfopgxu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163rmqwxccf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163khqizhhl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163lokssnlm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163jsjkhsfq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ckbcvylu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163wefwswcb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xmzaekna.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163mlfhqdlv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163npwgxozl.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163mohmpudy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nngnofaw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163uhbqlbso.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vvdfqubx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vriyyqmf.html

[C08] 闭包
来源：http://www.xuanzx.com/163rwzlckfi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uflpqvyl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wylllhqi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bdzhdjll.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163adrcatsq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163nvvaivkm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ypwowpta.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ztlbkzgo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rsfvcsgi.html

[C09] 递归
来源：http://www.xuanzx.com/163lraivtap.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vfupikeb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163eljejkmj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lfgtemdl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xkkxmugf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163dmvjhyqf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vuvjrslh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163cgcxqcvr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163oaqgkzmk.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zzqxieaz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xpzeavuf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tcxlxbzq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wvtizqao.html

TS:   同 JS
来源：http://www.sxryk.cn/163nkqtfami.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qyhimzwl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163kepeigrt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163btktktiz.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wjwyzcgv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nyxmyemn.html

Py:   from module import func
来源：http://www.aibaodan.cn/163olzmyccm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163isscgcfo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qqonzwwo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163blzvccfk.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163vvqxvjmk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163lbuudwtv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nknqtdtr.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163uedctppj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163aozafctz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163licxzuuc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lmojrhhi.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vpuxgbiw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eonlwmwc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163jihzxpbv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163cfmapqxh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dkduuzgi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163tvnubtry.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163frfynsit.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jnngiskk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yoiieqzs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vdatmgci.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jwbampdu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163awgudnld.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pccwmtzt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163irvdgsbi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163gcdxygys.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dllsucqi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uxwgtjzm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ittoeqex.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ssfqvwrf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fstpwprc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163miufcswb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gnuofvme.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jyeynlkx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ibytqkaf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ofzehbhh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163axfoudyn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fvxatyuu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mmvtyezu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xfimrmjv.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ubgfxilc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163vwcxdouc.html


<!-- 参考信息 -->