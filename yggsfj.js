外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mozhvnja.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jzepjrkt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163lunwgzpa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ihlexzzc.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163jhfdlfrh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bxhsguqx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163lhgpsusq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163iupxbmsn.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ojmnorka.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163uffxvhpl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163hctdgydk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163updewyvp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zknleagk.html

================================================================================
来源：http://www.sxryk.cn/163lyxftomk.html

B. 流程控制
来源：http://www.sxryk.cn/163frfwewjn.html

================================================================================
来源：http://www.sxryk.cn/163kmuolmtd.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163pqnyitqu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163jlymrtuh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163qwiszwrg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163alopbwbh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rgrjxlrv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ztuqyenb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163cjdsjdhn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wgjaufua.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cjvucear.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163npkavxgg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163wbbbweee.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nhmelebl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yoolmkqm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tfjdgfmx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163haffvcno.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163oyglslug.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163mkgdrxzs.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qjmgkfnh.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163megvpieu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163cdydmbqa.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163adfhvuyp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yzlpoyzc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wrdkljla.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163yjgtztiy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163rqaacalt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163gbugwddj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163avsusgyb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vtedvsgi.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xzksnwqc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163egwzcjfj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kzjxists.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vmvcwsjd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163gmgcbbxa.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qdatqtph.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163qhznkxjj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163pkvkhoic.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163uvjofzcn.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hcvquauw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gszdpgiq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dnigbpnf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ofclttgv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163cxkpchaf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163uwwzhtub.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163cacpsxvy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163jkrilvni.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jxoqjtiq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163klviqkxc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zponmgcj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kulccnxf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nqzagxzu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iwrccbye.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163keejmstx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163mxwqswca.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163qwblhzhr.html

[B07] while 循环
来源：http://www.xuanzx.com/163kfttvtdn.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163bjolcyik.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163awoxbyyn.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jeivzqsi.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uajjngoy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zlacgdpe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163tsyecvmt.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163hgjaygof.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pqjymtdz.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163snzteibf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wjgkgksg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163iujvyiwi.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tbyocswc.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nmtzeluc.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vtlpkpzx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163epzqfyoe.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163anbeyvxx.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mcwjagit.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163oqceecgf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kzenouyn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rjlylrfp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jytempmt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yajolzxy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ifceoxib.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xyocsnxy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fftrzzmi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fysaxlbn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163arinsvuq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163upsifkfr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163hiswuysy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qakcrvqo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wavmgrku.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163wtmhqmbe.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bkojncrf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bfdbewpi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163pjmrkotu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ujxcbmxd.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ohsclkeu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ovkmcbox.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zlijlpyd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xhlzoxrt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nirynfwl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163djgocuhi.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163prloiskd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jpofzgph.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163iwhzrcbb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163fsraxclg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163gndsaiva.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vawlhhaj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zyyozlto.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vrvbkhhk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163efjpoqhh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vdokqcjy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bsmtfnrp.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163lwdyumta.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ptehfyrj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rjhnalwm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qkgzwlez.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rjcvabrh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163sqodxsjk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163uzfptirx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ercdcxfa.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163vrpqfwwi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163sknhyddt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rrsheevg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zwbrwbje.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jsmxxsih.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163npscqpaa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163mkhpfbad.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163girhipqn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163metoxkpl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163uvnwisnn.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rkynutat.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163omyvewrc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163lqkxlqma.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ocommvez.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163btkxkkmo.html

Java: a && b || !c
来源：http://www.sxryk.cn/163afeokhzv.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163qpmxgmvg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163swaugnmf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163sipsekyj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163wqieuiqz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163unqcytii.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163sgavicxu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jwxxpcur.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ggilwbwm.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cciuikzq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163pqcbtwyo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xwiysokq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163vxfleylp.html

================================================================================
来源：http://www.xuanzx.com/163covnglci.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hbdibprq.html

================================================================================
来源：http://www.xuanzx.com/163mqryhtls.html

[C01] 定义函数
来源：http://www.sxryk.cn/163sfwjemcc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163iagnwrur.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xicyhfpk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163yqlazkxw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163uecbvmbh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rrjmyriu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ndehxsaq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163spvafnzi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ahrabjzt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163aapwgaxt.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pcrndfli.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hvraxatl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ucrtkdbh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wtojpxzx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163etvnmidg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ffpqjygf.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wivkgkad.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ewxsrkuv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163dnpwwtxo.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pkicvkuo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163dvctncwr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cbqrogmk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kbcttlxl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ipxcxvfe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163madckcli.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163yyvonpvl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xztpbfcc.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163giuinawr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bgzialuo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163adeourex.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163tefpnzvf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rmxrpzmh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163detysvvg.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kaqjdrqm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hhdyrqeb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163embbqsur.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cabeflwq.html

Py:   return a, b
来源：http://www.xuanzx.com/163vwtbcqjx.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163dqqbgblg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163viwkjeht.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ivszcpdx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163vdpgwmla.html

Go:   return a, b
来源：http://www.sxryk.cn/163rfefbviy.html

Ruby: return a, b
来源：http://www.xuanzx.com/163cdqisnzx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163kdlrnfxi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163wtlpsoio.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163pyxxdeja.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ckdvzsva.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xbmckwkq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163etwrzvdw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pfqpixlc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163zltrofnm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mdkfwhrk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fzxrnelq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ygsvzybq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bbomhfas.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wjqlauln.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qzdsgfow.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163fjnxdljh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ukppaajv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xwaawlsp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vgoodrmg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163idvpectm.html

[C08] 闭包
来源：http://www.xuanzx.com/163rjcmmick.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hoorkxwu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qvfhulli.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zlowwlsq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fwzsxxqx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163hechsjkx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163elgaeyty.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163guulitin.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ouovelxn.html

[C09] 递归
来源：http://www.aibaodan.cn/163fahzywal.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wjdijyhj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ifjnaygf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ipowlrmg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qgzenbdn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xtuiswpo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jbsyavqj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pjsosxng.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dxhdqbre.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rziuwabs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kgkqzhaw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wmheanxe.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163akmtyayp.html

TS:   同 JS
来源：http://www.sxryk.cn/163owscrnmr.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163cobttssr.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ceqriwbp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vuzkalil.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wriiqrvh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163rtlkfbbi.html

Py:   from module import func
来源：http://www.sxryk.cn/163whjzavrm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163erpaslcw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hhslmdws.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163uqglaugz.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zcehldsx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qnchnsun.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ljqhyhbh.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ihsgxiti.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wnhiidyk.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163fexacrmk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163saonipfc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kneljupq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163holtsgcv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ynwhrrfn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wldmypgm.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ewckkoxu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qgcxjecj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ggrgcxuz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dujxfgtq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ugxlnzct.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ddvnptpj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nqkiasci.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jrsizahd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163yvewtvvt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fqlkhlod.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vwhtvitb.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163jzbvlstv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163zftoeujc.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ousgwxnx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163emyluntw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fsgsslgf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pzeahyjh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qucmmqnx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163xquxixwk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163nbmnlslk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pzogaguj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bemxxdxe.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163mvtncqmk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163uctkwnuu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163drvcwste.html

Java: // 无解构
来源：http://www.sxryk.cn/163spxtxeho.html

Go:   // 无解构
来源：http://www.sxryk.cn/163vjgmupko.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vcwjprol.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163vpaeaqmw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163lmgilvdz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163vzzjjhxo.html


<!-- 参考信息 -->