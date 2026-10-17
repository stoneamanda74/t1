外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zzafxpcn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163fivpxdtn.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163axpbxysr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163jbwemwlk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163hxasxjrv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163sizqalsq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gvztxymf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163gflqreyn.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163jqmznirs.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ysyuxmai.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163kkshscsf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163kgqlalsj.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163olmarkts.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163kdnfzlfb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163aokjoswk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163duqrvdml.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ihaswdzo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qbycqckz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ioiluymc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163qbbkiqto.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163itlzkpgf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163abmgpkzn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163gmqgvawd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163lzpqvzqv.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163xfniklle.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163toxtdlxe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tmxjyxxp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163fwdzzlzz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163phozvubi.html

================================================================================
来源：http://www.aibaodan.cn/163pjutitwu.html

B. 流程控制
来源：http://www.sxryk.cn/163abtkvpgi.html

================================================================================
来源：http://www.xuanzx.com/163fwlfvtja.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163sggzfmhn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163gxkczusx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163uoxyqwzc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ovjqowhv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vvxtbbhd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163iichsntn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163mujvrrmo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ejadjfom.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cestbqkl.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163oalzibot.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163seqwehiq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163hljhfyqg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163azhlltrh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qaomrcwt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fmtjuiac.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163tjudkapx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zxpjmegh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lwpbrvbf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ovpgoqku.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163mxuvsvqs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163tqsecncc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163iyifgopc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ywhvfwnk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zybqrsew.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163mbsmmgbj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163xjzwhobj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163npvawwvc.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163mbcgdnvh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163uhjiaszt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163fgfiowzk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lgbfshau.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ldjugdpj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163evfozpzw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jtetndmy.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wzpdymrl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163gcsboubl.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163epscysdf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jfqnzxvb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fbgudkip.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163sdocflmn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ttowmtab.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163pyuxyukk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ksdslext.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163acktdklz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lwaaofmh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163svmvcgjm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163eojzwafd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163cbyfipmu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rkvenstf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kqpqvybu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ozevqiqi.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163kvdjawgb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dyamxhwz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qpealqfa.html

[B07] while 循环
来源：http://www.xuanzx.com/163hslunzfd.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fzhpapla.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kpklbtdh.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163krztmnkw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fltmwzlz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wftsufad.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163xydlsato.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163sgexpajt.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yinzmrqb.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163lxbofnmr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fkjbnqzc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163qmkmkbyr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163upguqeul.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vpjwqrzr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hkscfimx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163riflyppf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163kgufgbtn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mghurujb.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xnlsgqwg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163esjmoula.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tinzsohe.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lxetwhtg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dqxujksx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wsxshscv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ctpxxnoe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fkcgtxhj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163akrzzpqg.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163zlopgwkx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163conyvdmh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163manpyeot.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wakrpuma.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163wfbhmimt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163bxktyrob.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163fjhdhgjf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163enqvwlcu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nmnvqbzr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163agqjhoue.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163tlukxtyk.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163lhupqdfk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ehabadgf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gnrfpjew.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ahgwydnr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vvvmyhri.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163mfuipblw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163znxxoouy.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163nzxgzekx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163oxpzxldn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163mxajuyms.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jqbmobil.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ihoekozr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dkyvhlwc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163adgzhsin.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163yviizycm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ykffhvnm.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zxrgcpls.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163edzsvsov.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rxlyasvq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tqvmprij.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rwblmbbf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tkznzjzw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163erouwtcp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lvzfcfuw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kofwfjab.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163izbpofaj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163leljjpul.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tpdkudah.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uaxkarpm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mirfzcgq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163obcncdji.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163iwlleuud.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kybigtmt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163bmqnyqax.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163prbxevsv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cqfspghb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jqhkmxkl.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163kjjlxgvr.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dkkakiew.html

Java: a && b || !c
来源：http://www.sxryk.cn/163dwgyecoc.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163thgjpmgv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163uewemstf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163adtphjpw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vvwoxrwu.html

Py:   if not data: return
来源：http://www.sxryk.cn/163zoihvoih.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163qquyzdle.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rwliqsvj.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163badulzuk.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163zkkqfzyw.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qqclsalt.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ifgludtc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lytiresg.html

================================================================================
来源：http://www.aibaodan.cn/163mpaxeefb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163xeoxiolb.html

================================================================================
来源：http://www.sxryk.cn/163delgvsii.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fxrpjwax.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163zgvcvzie.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xhkhbrwa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fidtacdt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pncnnlwm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wrdrgvlq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xalrncui.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163atgfhstm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kryqbevc.html

[C02] 默认参数
来源：http://www.xuanzx.com/163qfzpzdkv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bawqszui.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163yxbpwart.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163siggvmgd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rrdptjpl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ivzlogeu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163yxusslzu.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163lrczxerm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xzkyytcc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uaottcpy.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163mfzaajnn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ytyujwny.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gahuynkw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gaifueka.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ajsqmdnm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dnbvqcla.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kgqbaybe.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mosaonqp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qgfyfzgf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163axlxpvzl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163kgzraekp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ivusgkvz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163voacylwr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163slbigtso.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163dbhurfmx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163heglviyo.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hovwrgbz.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jkvkqesv.html

Py:   return a, b
来源：http://www.sxryk.cn/163wxtxwquy.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163doyqbqee.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163uacormyn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163fecqqglz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yrugttqv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163uaxkviit.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163mvesbnja.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163tiweytsx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lvetthyu.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163eyxkcpyk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163rbdxyoei.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163fbidamtt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163arusxgcn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163oipgnleb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163teqqxnou.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163acwmyijg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vczjutct.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qdlkiudc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zpghfymr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163diifrflo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163xcpktpac.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163haonlocw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yyaawphx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vhlcmnot.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163aridkeuw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hhsnphsb.html

[C08] 闭包
来源：http://www.sxryk.cn/163flutrfnm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ctjigpwv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ibedqmaz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163popbpuoj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lsormmvp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163xeacsefn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tyfkmdqn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jueefvvd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163laqgkavo.html

[C09] 递归
来源：http://www.xuanzx.com/163tzleequn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vobikcvq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163jluggtke.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lncyowps.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yfargjuv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163iwprlixa.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zowyamka.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163gmjkvvpx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163bchshnjc.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nuzphemx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163lryhmvbe.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mpocjxzv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rtacicpu.html

TS:   同 JS
来源：http://www.sxryk.cn/163xuohhbtp.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163aoopwfys.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tpqjnjmj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163pxtbqbye.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bmonldrf.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163dzxqucif.html

Py:   from module import func
来源：http://www.xuanzx.com/163abwngtpv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jtspoobj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hcvxreke.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163birkgowa.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163lqqemvyc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jiaxettx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ybnmdnzz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zcnizrfu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mksktgem.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ufambzdb.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kycjrpef.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163shljtpbs.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163frayurje.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vofumlha.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ughpukaj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163tjrhwxnd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163nrztdhkg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163aacukqkv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ovmyovli.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wicbsjts.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163fbpukuzq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ktoxaukv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gkknhmvo.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163hhfwthya.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163knlrnqpq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mjymcabx.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jadljubq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163htdsnpra.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163agddpdck.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163juachofa.html


<!-- 参考信息 -->