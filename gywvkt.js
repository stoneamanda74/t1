外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163sdellwqe.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163yusrdhvf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163rgogwxrc.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163bncnxggq.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163yophbsqb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163yazuxlxz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qrajlews.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163btvenoro.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gfqtbsbw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xuvqmlmb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ehsbbujp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vqtloozk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rbqmaybj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ugauvwuy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163zxltospr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163geyevlqa.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163yljxuntz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163zulkbtoo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ukktzmmi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163yawuggfy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163owcgjija.html

================================================================================
来源：http://www.aibaodan.cn/163rbhejmco.html

B. 流程控制
来源：http://www.xuanzx.com/163bncqmhjt.html

================================================================================
来源：http://www.aibaodan.cn/163qnaavrlm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163hdciykvj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163amamigij.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163pswtppdv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iwwaglds.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nbgowznh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163umhknbjv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163fevbpkra.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vhowleox.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163enfzqqwc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163dcmorlsk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xlzzzsxu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163drnvpdwb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163liobpqnv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163abmhenwx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qflwsqmv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163kkbqhcay.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163kwhhsnfa.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uqqcnzev.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ljvocsvg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163kiiwzevx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163yfrehchf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qtqhteyo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wcelfaxo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163iwbpyjlf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163fbzounei.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mupppdqz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163mcryhlkl.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163uvyuqjkj.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163gobjdvvb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tzjtbtgk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nvejaabk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fkbashds.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163kymvwgll.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ugfijsxh.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163qodpaper.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163srrxgdob.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rteoqkde.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163xdjaoadx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ezvnuvfg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lucdwqil.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163iggwzwaw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163pitumyjv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qyiuettq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163eipdjjlx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qsnlbgis.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163luuiftmj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163lclqcoaf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163udavgbsl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163iczuyqjv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bjzajpuc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zuxwryby.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zjfxvqtg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163cleouzfu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ifmjwzmz.html

[B07] while 循环
来源：http://www.xuanzx.com/163kcrmtaxr.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163tcnvxaja.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163nkvhiqre.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jkwibyiv.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nzukxoag.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ocabbixt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163scjzmwqp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dvsvbste.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yydesbng.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163srueqzye.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163oorzqujg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163wrwmekoq.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gohtavcz.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rhvueayy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163llpwbbuk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fchvbolh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fictxuiq.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163havtmety.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163easzghcv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163discbfyh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ywtjkjys.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cprjnqef.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fjnmctgk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lnvcsupm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ngcysery.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163cvtswcus.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zbnoipsj.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zalqpbvk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ttzusgnp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mbmbvjbt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163msgtahsw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163bbqgcacr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ofxsxiac.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163xhbtipgk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163shlmmnmt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ocqpuabt.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bprfitza.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163pzebmgob.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ryfjqxjd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ppvohjtt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jdfdghor.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163tqcddebf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163kiurpmnc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rtkpaooi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163msipdiey.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163tgwnrehw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163hmuclsqg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163oceblwcv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163svefxhnh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163negyvhak.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ybnmyvgw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tgcfiemy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tsfomhzq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163blllmfyg.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xylatpjw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163cfkkmawi.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163oemrcjwk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wilunjai.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xzqhslbq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163iwkwidsd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hxprgvza.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163twefordv.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163theezxdq.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163iiaizxwo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163sfavfhxn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mpbbydhq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cduwibtt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qvrkqnlu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zhgrhttf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163yljqobzv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163udrlnqgc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wpnhrhcn.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163eimtqbws.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dmuiqpcm.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163oxvcspuc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163bbncljwa.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jzzckgeu.html

Java: a && b || !c
来源：http://www.sxryk.cn/163juxlzfpe.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zrwlojxz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163nwgpsnbp.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163klqrqpyp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gtsbhdxj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vnzwwatc.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163inaqdmwq.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163kdqoypwl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zrefmsfq.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163xnoaoqwx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163xtdmpdbu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163eacjwvri.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163garrinys.html

================================================================================
来源：http://www.xuanzx.com/163vievctga.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163fnfdoybq.html

================================================================================
来源：http://www.aibaodan.cn/163crwdsazq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163jnspdsqx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163xeymbhgh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rpyfvqoy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163sowpgwnx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jhwwjfnx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iyqttkml.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tsyngtks.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163nccdkvoa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jzkbgwdr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163spjmbpsj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163sgfyniqe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163bglikpeq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163upzkrlgh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163anhnjthv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vznmtpau.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163urqcuwjo.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lfqhyohw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xqilzkdb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163dlfusbxv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163aemdvnhi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mzwbukrp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lyaeulwn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zhttzesg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163vazykbjk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163otqbikqw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ivdzjwjp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163dzefsqeh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ykdcuetl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mkiumwlh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ardcysjj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163bcxpjjao.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nhugcqnz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163djuhfrdb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qpjipbcc.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163whkhxsqh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vcripfaa.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xsvuwfdm.html

Py:   return a, b
来源：http://www.xuanzx.com/163qyelshyv.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hiymsyer.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ciqqiefe.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163iawdxrzy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163kvvsjmdq.html

Go:   return a, b
来源：http://www.sxryk.cn/163rrzzozpf.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xiigbcbt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163dtagxslv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lcglqovc.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rcqzlzvl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zxjuovbr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ifqhipnq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ggebdzvb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163cvistrci.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163gjjmvxwd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jytremew.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lqeyxwfl.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ejxlokwc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163gomwjcnv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tpxlauzv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163hgzezumn.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163fermsqzb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nddtsrbl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163acsnmmxq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163izxblyke.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wfmibyjo.html

[C08] 闭包
来源：http://www.sxryk.cn/163koygakba.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163adhauhpw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wkduugbt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ppboapmv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vmfysphj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163klvnjbuv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zhhznpdp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lfmiwlyj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163coakavsv.html

[C09] 递归
来源：http://www.aibaodan.cn/163qstteiph.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163jldyxmqt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163qhnzqpvt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qejtctiy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163moksvylv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jqdistvq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163odvctwei.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lmlfwjzw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163llkladnd.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vdkmzhqi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pokhezvn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nxyqwcwl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163csgqycgb.html

TS:   同 JS
来源：http://www.xuanzx.com/163xkyxvxqw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163prvrkeje.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hauajmss.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163juuxyswd.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ccdantft.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163pzwywsji.html

Py:   from module import func
来源：http://www.xuanzx.com/163adgzzqfh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163puufcwui.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163dlitoqso.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zymxytmp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163msoxogtj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mgxbsxwj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xqmoygsu.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163nqmvagau.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ugaiecdw.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kxmuneeh.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qjkifubw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163adonqwsg.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163etqxvdik.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lxgbjgej.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163tgcatqzd.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163iwisrnlo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tidesotx.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ggfxxdle.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hehzzlbu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163djpzqtzc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hbhzukio.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163adtskkse.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wdcqvjoo.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163oluwwycz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163svomodkx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163gaevedom.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163zdapvwgo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rmicxdhi.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xpjamasv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163sqrmhowf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gwevrbfj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rtinhebn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ehkscxuh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163hcwjksiq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jbpiagkg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163weylfunt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163xestbczi.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ebiezhwd.html


<!-- 参考信息 -->