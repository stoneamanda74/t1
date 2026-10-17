外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wqatybep.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163oqyyevci.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163hlafxxea.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rlzpjuoi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163pujnkggy.html

================================================================================
来源：http://www.aibaodan.cn/163ccpdyxby.html

B. 流程控制
来源：http://www.sxryk.cn/163rtgjrbus.html

================================================================================
来源：http://www.sxryk.cn/163tjezplyg.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163foyctoyo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163dnogghwa.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163gbzxazew.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lkxvrnan.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mbxqjztr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163htomosbw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163yoodmobw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163gghybbex.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gejpvlmk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163cwitivhg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163sufuaaus.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163seyzarfa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163azbhtvcv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ixuoomot.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rwgbnfiy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163knmvptcd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163lalaeqlg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ksokpoeb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163upvygwqs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163hgpxrpbo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163kxyraejy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163sovlrrok.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tccemfcq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163xgaskcrt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163hxlpkrxj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xzeudqja.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gvhjifjz.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kbzaofla.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vqudoooy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163izglcqea.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dacdhsph.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163uqnbzhqw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163jxcwcppj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wqfuqhqn.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bujybsiv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163rknhqdcw.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163usckraun.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163sggghejt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xxdofhgs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yneaopur.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gxvsrvvt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163splvmsri.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vsamfqkr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ulqluymu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rketqmuf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ynmybbfa.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163zkqzubbk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163mawwiwqz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ydtoktro.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qrngxzds.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163eiimaerc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163wbtkfanq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163vmlghmxh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163qpjtljby.html

[B07] while 循环
来源：http://www.aibaodan.cn/163zhvchuee.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163qzpcmktl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ildokodc.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wfgmfyyt.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ncyhyrav.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dffzpplq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fxgoodlk.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bqgafppy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jivempdu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163pozfdppf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163eyvjzdun.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ulajumyi.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vzdpmndb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jtlptroo.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hrpfrbvw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163enlmqmjg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163sypceste.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pqtrofev.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163uasoqznp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163rbhbqqoq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163zuhowhms.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163abhndkeu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jggmjrsy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163isfaywkk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163pmbtpfbo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163rlrtudqa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pxetgtwz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163fxxoieex.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tdoynyiy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163usidnxni.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163yaiobpqw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zwvoougx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rqejnbmt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xdehbsnl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163zklxbbzs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163noycycxm.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pjwyaaqb.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163nahtwgiq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qasaflsu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qijmdafb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ognzckno.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vogshedv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163chuafjlb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ehcyxgui.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sbsiasmy.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163jrhfaenc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163tdlsxeda.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163fpsxjpdn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ocaayfwt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ddlsulgf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jlvqlhcj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nxsycepp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163uoebiyyf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ptjrirjd.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163airoyfmm.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163jnshhzgp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163scwjcprw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163eoacrdfs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zgqcewrz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163mamzazdt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xoeexfxk.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163roewoxuj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163szuaufrp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163owhslkdz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163pwqdkuvs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qklrhwgd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tutitkjn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163losrytgr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163yqelloqw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163evjyedsn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qyaaeoam.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163jswzglxc.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163aprzlmap.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163rpsnniso.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163vbpmolxs.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163sybpmame.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kzcvterx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vnbhaslm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ovcdwblv.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163kormhwww.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ivclibjg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xdjlfect.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rzsqfnay.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ziibkddb.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jrvdmoht.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163hcoyrqdf.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163bcmusjtt.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ccztkoid.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qrcfmmxo.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163msxtpolg.html

================================================================================
来源：http://www.sxryk.cn/163ivktzmzr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rtytrbvo.html

================================================================================
来源：http://www.sxryk.cn/163bqxuwrof.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163nyinrwrh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163woqupmes.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xujjhgez.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163cstxqwmf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ynywclhk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tbnptsun.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163wcrjuaom.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163jhzdyivg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wjbbursa.html

[C02] 默认参数
来源：http://www.xuanzx.com/163fucjruyx.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163svwotdrp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163izhqwihd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163udoveyuq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163eelxysys.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163aaudvcio.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fficdens.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hgxlxdpf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tdaofajo.html

[C03] 可变参数
来源：http://www.sxryk.cn/163beryvvud.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163jeapfdlg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zwbvhhsj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fkjjsbkt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wftbfvqo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163hiwjluge.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bgkyxxey.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163nsatowpq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163feqxeosj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uyxgtouj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163sxtdceta.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163brfpwiop.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qlmtvdfu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dkftegma.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rpkkiuqd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ypksktrh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ihwghfhv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dwyyvjlo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163aucpqbnx.html

Py:   return a, b
来源：http://www.xuanzx.com/163uxrhhtyq.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163htstncia.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dvaxqhod.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zsgeyyxe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163camaxzgs.html

Go:   return a, b
来源：http://www.aibaodan.cn/163tcfruvzx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163npeknaky.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wkwxknnr.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163surrcdmb.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163qmgnhaea.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ofnkffqv.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163kljsequo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163iwplbbhb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163hqhfotas.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rsfusxez.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rwusxdaa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kvbpmtdy.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cqclafhn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xkhlnola.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163aaeunisr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163iocohfpe.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163yrexwkvb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163wxcznriw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vfsaipag.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wpidxyvc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163awnmwwix.html

[C08] 闭包
来源：http://www.xuanzx.com/163hrzccxin.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ahwvflfl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xnbwuuoc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qekcgzwv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nitqhlmo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163zimgusxq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zguyvqqr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163rrckpjso.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gatncfhd.html

[C09] 递归
来源：http://www.sxryk.cn/163rtenchyg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mllptqbe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gfwzcxoi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dhyiawqe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hsyxznnx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163thciandf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163atowfknb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163wctossuf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zyaknxle.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163nsulgfaf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163obeopfkj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vddzmhki.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163npgcsjvl.html

TS:   同 JS
来源：http://www.sxryk.cn/163wurpoeum.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163cduuddfz.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mybrqmyr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gfrwgvek.html

C#:   块级作用域
来源：http://www.sxryk.cn/163hvpqzxax.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163dbcpghmf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yqebjvvl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163bhjdppoa.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qjxmkjtj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163etrupskd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hwfeuwyz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163gfjeugmw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163yzggrkpz.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ylzkxlbg.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163klkeintx.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163bavrzbvk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163uwapjqan.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lpiyeytl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163veqxibpl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163azfefnsl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mhqvsbdt.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jviqylax.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163aijvdkgv.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ehvgoseb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dnefmyyr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hzddkxvo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ixfexmbf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ahupctnu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zcldhxkx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jcmjxkni.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zejmtejh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dhrnycqo.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jhjunwia.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hcomlnij.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wlratdbo.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163viedjvyt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163yezvtcez.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jdcolhzg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hgigxxee.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rxzimaxe.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163skoozuej.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163dtonbdsr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163cbkyywgc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zbbrqbft.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163gucvfjtk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vxzfekhh.html

Java: // 无解构
来源：http://www.sxryk.cn/163fpcvwhcf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fxgdkbzz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163yaywqvch.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163auqrxrab.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qgdsbhsu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163cbrscwsf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rhzqlgeb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wqfmrrnx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ebgxgkew.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hygctqip.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lvoadoak.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vcmzzjgd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ejyfixfn.html

================================================================================
来源：http://www.sxryk.cn/163yswqnzix.html


<!-- 参考信息 -->