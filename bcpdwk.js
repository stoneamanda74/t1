外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163bzourkgl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163nbfhlizx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fpkwtlih.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jtopmgxe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163iacaxhun.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fgozecys.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ynswedwc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163neoleipc.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163xstqagyw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kkbfrrms.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163okftzlmo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163duxrrswf.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163bjppuvzk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163fnipszlc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163qjqkbpwd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163dqjzhsex.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mwnusoxw.html

================================================================================
来源：http://www.sxryk.cn/163tzosyoli.html

B. 流程控制
来源：http://www.xuanzx.com/163avydxxgf.html

================================================================================
来源：http://www.aibaodan.cn/163nbnvcobb.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163vsypvgzt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163cicewsaj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163qngzzemo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oxytowsd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wjduwnat.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hrcilvlh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163tbkcqjxh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163xvttkxtt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hijwozzm.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163aglzopew.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163nlikawzn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163eyrpjyli.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qrzdecsi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qwiszjre.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ncprnuis.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163djoidpgt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163rpocilsc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kdgpbzew.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ovbuayxm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163rnduppzq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163eturyaxj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163horarrbi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wnkgvfzy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163swlppmmo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bvbrftaq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163phfgzwee.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163slsdkzib.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163dnsxviwt.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163tdvqvaum.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ceqatfad.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zrfsggxc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vdcajufn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zplnaprn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163mhbsezep.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163kpgqzbgz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163mdtvqlfi.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163aocvldsy.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163vaofqnma.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163oeyvrbbq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fqcgynas.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bjfywaiv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ajuvcmhr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163yogbaowp.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vifxhoat.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fnxcdqjj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163udqedaph.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163uonrvwku.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163yygtvvwr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163onhijphp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163irnvaxjk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163maeoghhe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163yfefjvrg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qglqqcrt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bljzdblh.html

[B07] while 循环
来源：http://www.xuanzx.com/163rsxyzere.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163qmzukmca.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163iiotstah.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hzzowxph.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lrmaekpt.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bdmyazlc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mtempkfw.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163cgmqtfne.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gnhkkdmh.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ugfuqwqq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wzktuhgu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163cbfxogzm.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rpyfkbcl.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gwctuonv.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mubmmxos.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163dnsarald.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163bcwkchzm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gaotyamd.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dkkmmlny.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163iyummocb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163itfpxjpy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163chqktftl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163necnajde.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jzxzfovl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ioirpyap.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163gauwghzc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sksswgtv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rhbsklvy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163oiorhsut.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ihdpczsc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pouumjdh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qyclbqep.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163eofdtnkt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163drlivmmh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163abriwjbf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163xxmfimdb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163hiudzkxs.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163unttjquy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163uexcuphi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lichmsms.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ccgsepah.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163azehxsjc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nyrgueiy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jyocqlmk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vuolnddf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163maybmank.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jldekfik.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wjkyeeip.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sithmsdf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pqmrjuec.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kvskexat.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163bftbsswo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163oybicdch.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163afsxvlrw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wsziozou.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gjernpgf.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163wsltkzca.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ivjwfxoh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pqwyqbws.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mccnycsq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163aifasucg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163gkvtakos.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ktjqxehd.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ltbncklc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163yfyrxejv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163nmqyfiqu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cyzkyzeh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cflzlasm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163qjnoclnk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163teivoeav.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ilzssdna.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zgvsxhzo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rcxnmhys.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qurthibu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wllkiriw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163olufpdzq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lvnytyco.html

Java: a && b || !c
来源：http://www.sxryk.cn/163pqqcimus.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163isdzhjyp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163kyzwtcpc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163lndvtazd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ranarlmr.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nxyajhcw.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cekpdnov.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lgnwgeky.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ctrrruga.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163siknioqk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163txsahefd.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ghewclkn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gsrvkvsn.html

================================================================================
来源：http://www.xuanzx.com/163dguikhef.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hjlqdamh.html

================================================================================
来源：http://www.aibaodan.cn/163rbxyhhbk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163irmurxyp.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ftlyvcbx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qqaytetn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wrsmqnah.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163idebrdvf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mpfqiztc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zeiocjmj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163npvfsvxc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lejacrch.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qbxdkjvr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163nglaojwm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163rnytjpqk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qixogsph.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bmrcpmie.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163sgnzwgtn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gcfidbqq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fcfqacxz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163biuinqnj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163cewajssa.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fwylrngp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163noowqyoe.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sviasruy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163eeyihfjz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163tlwpsltr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163sclbecqr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163biugkagb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163zmqfqavt.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163odgqqfou.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163aoftkczg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163envdvyjz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163mwjpkwzq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ipqmtksj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ygenouui.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163dujgtyle.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vmupiafd.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vdxfmxrm.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163tbamsrur.html

Py:   return a, b
来源：http://www.xuanzx.com/163bhwekggt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163xbpaokfz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kbccjxty.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bgkriguz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nbkloapg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163vywokdax.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xhdncfme.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ajgaxpks.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rsqammsq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163irdudggd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163axhowygy.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wkclvqkw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163fldtihlb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163exgzjrai.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ncjzaujs.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vdadrgcd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163rygcwdxz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163cbiwnntr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163uwtgtysz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xcndnror.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zuqvijjb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163gvoezqly.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tlyvekpl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vejxaqvy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163hzmuqurx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qwdzvyip.html

[C08] 闭包
来源：http://www.sxryk.cn/163dieqhsdx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163whnsmvhx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163hzycpuhw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ivisxnwe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gpgqxgia.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163oxvtytjm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163errdybrr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163eteibldo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jmwzwgce.html

[C09] 递归
来源：http://www.xuanzx.com/163ktoccxfo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163pgungjyv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163nqjtujrz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tuilwpjj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163essyckiw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163anpydkyb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163wkwfcmwf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163pfbxuylh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gxjktojx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ohwtqczu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nxbrodfh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163olbeoscs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163cvfrreoj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vexblmir.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xuxqrkxu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fnpoolve.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163bkrahtnp.html

C#:   块级作用域
来源：http://www.sxryk.cn/163iqywqmkm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163cynugrnb.html

Py:   from module import func
来源：http://www.sxryk.cn/163sufcuxfq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bjutygxn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jdrcuddf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163piknymqn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hlhopcnm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163xhezhyty.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163wccbrpgw.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163iiknwvnv.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lpgspsdm.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163whvtqfxw.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163msqoweck.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163invsapgz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qnxgnywd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163gmptohsv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163mawnrigm.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tzedhcht.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ivcszexa.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xxocqpnp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bcustxne.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163koklxeby.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163zksfpyuv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kyplqzur.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uuripboz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163apavddgt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163bzfdnozq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163deparfgk.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mukrmesp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163oncptrzh.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bbcduofc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163sprogsou.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ogieptof.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163bbfpnljf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ovnwdlsn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163goybsvvd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gcetbocu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yfgjmtgy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163lgnmikcs.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wgkyowyn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tbwamcij.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jexfkouw.html

Java: // 无解构
来源：http://www.sxryk.cn/163cvukvyxs.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163agkkyfty.html


<!-- 参考信息 -->